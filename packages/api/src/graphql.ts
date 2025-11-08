import { moodNoteCreateResolver } from './graphql/moodNoteCreateResolver';
import { moodNoteDeleteResolver } from './graphql/moodNoteDeleteResolver';
import { moodNoteManyResolver } from './graphql/moodNoteManyResolver';
import { moodNoteOneResolver } from './graphql/moodNoteOneResolver';
import { moodNoteUpdateResolver } from './graphql/moodNoteUpdateResolver';
import { testCreateResolver } from './graphql/testCreateResolver';
import { testOneResolver } from './graphql/testOneResolver';
import { Resolvers } from './schema.types';

export const resolvers: Resolvers = {
	Query: {
		moodNoteOne: moodNoteOneResolver,
		moodNoteMany: moodNoteManyResolver,
		testOne: testOneResolver,
	},
	Mutation: {
		moodNoteCreate: moodNoteCreateResolver,
		moodNoteUpdate: moodNoteUpdateResolver,
		moodNoteDelete: moodNoteDeleteResolver,
		testCreate: testCreateResolver,
	},
};
