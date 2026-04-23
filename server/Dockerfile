# syntax=docker/dockerfile:1.7

# ========== base ==========
FROM node:24-alpine AS base
RUN apk add --no-cache dumb-init
WORKDIR /app
# Let Node print nicer stack traces and respect UTF-8.
ENV NODE_OPTIONS="--max-old-space-size=1024"

# ========== deps (cached layer) ==========
FROM base AS deps
# Native build tools for better-sqlite3 / sharp / etc. (yarn install needs them)
RUN apk add --no-cache --virtual .build-deps python3 make g++ libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000
RUN apk del .build-deps

# ========== dev ==========
FROM base AS dev
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
# Strapi dev mounts the source tree via volume; COPY ensures it works without a mount too.
COPY --chown=node:node . .
USER node
EXPOSE 1337
CMD ["dumb-init", "yarn", "develop"]

# ========== build ==========
FROM base AS build
RUN apk add --no-cache --virtual .build-deps python3 make g++ libc6-compat
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN yarn build
RUN apk del .build-deps

# ========== prod ==========
FROM base AS prod
ENV NODE_ENV=production
# Install only production deps (smaller runtime image).
RUN apk add --no-cache --virtual .build-deps python3 make g++ libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=true --network-timeout 600000 && yarn cache clean
RUN apk del .build-deps

COPY --from=build --chown=node:node /app/src ./src
COPY --from=build --chown=node:node /app/config ./config
COPY --from=build --chown=node:node /app/database ./database
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/favicon.png ./favicon.png
COPY --from=build --chown=node:node /app/tsconfig.json ./tsconfig.json
COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/dist ./dist

# Writable dirs used at runtime (uploads lives on a named volume, these don't).
RUN mkdir -p /app/.strapi /app/.tmp && chown -R node:node /app
USER node
EXPOSE 1337
CMD ["dumb-init", "yarn", "start"]
