import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
      hsts: {
        maxAge: 63072000,
        includeSubDomains: true,
        preload: true,
      },
      frameguard: { action: 'deny' },
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: (process.env.CORS_ORIGIN ?? 'http://localhost:5173').split(',').map(s => s.trim()),
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: false,
    },
  },
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '256kb',
      formLimit: '256kb',
      textLimit: '256kb',
      formidable: {
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::rate-limit',
    config: {},
  },
];

export default config;
