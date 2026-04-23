# syntax=docker/dockerfile:1.7

# ========== deps ==========
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ========== dev ==========
FROM node:24-alpine AS dev
WORKDIR /app
RUN apk add --no-cache dumb-init
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .
USER node
EXPOSE 5173
# Vite must bind 0.0.0.0 inside the container so the host can reach it.
CMD ["dumb-init", "npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ========== build ==========
FROM node:24-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Empty default so the built bundle uses same-origin `/api/...` paths (Caddy proxies).
# Override by passing `--build-arg VITE_STRAPI_URL=https://api.example.com`.
ARG VITE_STRAPI_URL=""
ENV VITE_STRAPI_URL=$VITE_STRAPI_URL
RUN npm run build

# ========== prod (nginx-unprivileged serves static assets) ==========
FROM nginxinc/nginx-unprivileged:1.27-alpine AS prod
# Runs as UID 101 ("nginx") already — never escalates.
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
