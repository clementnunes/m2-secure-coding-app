// src/index.ts
import { FastifyConfig } from './config/fastify.config'
import { server } from './lib/fastify'
import { DbConn } from './dbConn'

async function run() {
    const dbConn = DbConn.getInstance();
    await dbConn._appDataSource.initialize()
    await server.listen({ port: FastifyConfig.FASTIFY_PORT, host: FastifyConfig.FASTIFY_ADDR })
}

run().catch(console.error)