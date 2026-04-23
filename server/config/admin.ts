import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      maxRefreshTokenLifespan: env.int('ADMIN_SESSION_MAX_REFRESH_LIFESPAN', 60 * 60 * 24 * 30),
      maxSessionLifespan: env.int('ADMIN_SESSION_MAX_LIFESPAN', 60 * 60 * 24),
      idleRefreshTokenLifespan: env.int('ADMIN_SESSION_IDLE_REFRESH_LIFESPAN', 60 * 60 * 24 * 7),
      idleSessionLifespan: env.int('ADMIN_SESSION_IDLE_LIFESPAN', 60 * 60 * 2),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', false),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
});

export default config;
