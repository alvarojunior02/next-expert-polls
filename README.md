# NLW Expert - Node.js
API for a polling system, with real-time ranking via websocket

## Technologies and Libraries used:
- Node (https://nodejs.org/en);
- Fastify Framework (https://fastify.dev/);
- Prisma ORM (https://www.prisma.io/);
- Zod - for validation (https://zod.dev/);
- PostgreSQL (https://www.postgresql.org/);
- Redis (https://redis.io/);
- Docker (https://www.docker.com/).

## For run locally:

Requirements:
- Node v20.11.0 or higher
- NPM v10.2.4 or higher

If you wanna use Docker, follow this guide: https://docs.docker.com/get-docker/
or
Install PostgreSQL and Redis on your own real machine.

```
cd nlw-expert-polls
```
Configure the '.env' file white '.env.example'
```
npm install
```
Just for Docker users:
```
docker compose up -d 
```
```
npm run dev
```
