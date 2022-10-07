import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import path from 'path';
import setupDatabase from './config/mongoose';

const setupServer = async () => {
    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                path.resolve(
                    __dirname,
                    `graphql/resolvers/*.${process.env.NODE_ENV !== 'production' ? 'ts' : 'js'
                    }`,
                ),
            ],
        }),
    });

    server.applyMiddleware({ app });

    await setupDatabase();

    app.listen({ port: 5000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:5000${server.graphqlPath}`,
        ),
    );
};

setupServer();