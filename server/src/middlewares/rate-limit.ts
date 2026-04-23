import type { Core } from '@strapi/strapi';

type Bucket = { count: number; reset: number };

const WINDOW_MS = 60_000;
const PUBLIC_LIMIT = 120;
const ADMIN_LIMIT = 20;

const buckets = new Map<string, Bucket>();

function clientKey(ctx: any): string {
  const xff = (ctx.request.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim();
  return xff || ctx.request.ip || 'unknown';
}

function isAdminAuthPath(path: string): boolean {
  return (
    path.startsWith('/admin/login') ||
    path.startsWith('/admin/forgot-password') ||
    path.startsWith('/admin/reset-password') ||
    path.startsWith('/admin/register') ||
    path.startsWith('/api/auth/local') ||
    path.startsWith('/api/auth/forgot-password') ||
    path.startsWith('/api/auth/reset-password')
  );
}

export default (_config: unknown, { strapi: _strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    const path = ctx.request.path as string;
    const limit = isAdminAuthPath(path) ? ADMIN_LIMIT : PUBLIC_LIMIT;
    const key = `${clientKey(ctx)}:${isAdminAuthPath(path) ? 'auth' : 'pub'}`;
    const now = Date.now();
    const bucket = buckets.get(key);

    if (!bucket || bucket.reset < now) {
      buckets.set(key, { count: 1, reset: now + WINDOW_MS });
    } else {
      bucket.count += 1;
      if (bucket.count > limit) {
        ctx.set('Retry-After', String(Math.ceil((bucket.reset - now) / 1000)));
        ctx.status = 429;
        ctx.body = { error: { status: 429, name: 'TooManyRequests', message: 'Rate limit exceeded' } };
        return;
      }
    }

    if (buckets.size > 10_000) {
      for (const [k, v] of buckets) if (v.reset < now) buckets.delete(k);
    }

    await next();
  };
};
