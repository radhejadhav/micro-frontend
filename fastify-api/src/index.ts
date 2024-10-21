import fastify from "fastify";
import productList from "./api/product-list";
import fastifyCors from "@fastify/cors";
import fastifySwaggerUi from "@fastify/swagger-ui"
import fastifySwagger from "@fastify/swagger";
import pino from "pino";

const Fastify = fastify({ logger: pino({ level: "debug" }) })

Fastify
    // .register(fastifySwagger)
    // .register(fastifySwaggerUi, {
    //     routePrefix: '/documentation',
    //     uiConfig: {
    //         docExpansion: 'full',
    //         deepLinking: false
    //     },
    //     uiHooks: {
    //         onRequest: function (request, reply, next) { next() },
    //         preHandler: function (request, reply, next) { next() }
    //     },
    //     staticCSP: true,
    //     transformStaticCSP: (header) => header,
    //     transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    //     transformSpecificationClone: true
    // })
    .register(productList, { prefix: "/api" })
    .register(fastifyCors, {
        origin: "*"
    })
    .listen({ port: 8080 }, err => {
        console.error(err)
    })