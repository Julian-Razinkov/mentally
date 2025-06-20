import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

async function main() {
	const typeDefs = await loadSchema('src/schema.graphql', {
		loaders: [new GraphQLFileLoader()],
	});

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	console.log(`Server started on ${url}`);
}

main();
