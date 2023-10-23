import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { RyttareResolver } from './resolvers/Ryttare.resolver';
import { DrakResolver } from './resolvers/Drake.resolver';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as mongoose from 'mongoose';

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RyttareResolver, DrakResolver],
      validate: false,
    }),
  });

  const PORT = 4000;

  const { url } = await startStandaloneServer(apolloServer, { listen: { port: PORT } });

  console.log(`🚀 Server listening at: ${url}`);

  await mongoose.connect('mongodb://admin:pass@172.17.0.1:27017/', { dbName: 'drak' });

  console.log('Database connected!');
};

main().catch((err) => console.error(err));
