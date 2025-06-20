import { moodNoteManyResolver } from './graphql/moodNoteManyResolver';
import { moodNoteOneResolver } from './graphql/moodNoteOneResolver';
import { Resolvers } from './schema.types';

export const resolvers: Resolvers = {
	Query: {
		moodNoteOne: moodNoteOneResolver,
		moodNoteMany: moodNoteManyResolver,
	},
};
