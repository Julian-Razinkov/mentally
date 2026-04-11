import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import * as dotenv from 'dotenv';
import { InvocationContext } from './context';
import { getUserFromJWT } from './helpers/auth';

async function main() {
  const result = dotenv.config();

  if (result.error) {
    throw new Error(`Failed to parse .env ${result.error}`);
  }

  const typeDefs = await loadSchema('src/schema.graphql', {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }): Promise<InvocationContext> => {
      const user = await getUserFromJWT(req.headers.authorization ?? '');

      return { user };
    },
  });

  console.log(`Server started on ${url}`);
}

main();
