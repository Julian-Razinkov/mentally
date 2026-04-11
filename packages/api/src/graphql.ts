import { moodNoteCreateResolver } from './graphql/moodNoteCreateResolver';
import { moodNoteDeleteResolver } from './graphql/moodNoteDeleteResolver';
import { moodNoteManyResolver } from './graphql/moodNoteManyResolver';
import { moodNoteOneResolver } from './graphql/moodNoteOneResolver';
import { moodNoteUpdateResolver } from './graphql/moodNoteUpdateResolver';
import { testCreateResolver } from './graphql/testCreateResolver';
import { testOneResolver } from './graphql/testOneResolver';
import { userAuthenticateResolver } from './graphql/userAuthenticateResolver';
import { userCreateResolver } from './graphql/userCreateResolver';
import { userDeleteResolver } from './graphql/userDeleteResolver';
import { userOneResolver } from './graphql/userOneResolver';
import { userUpdateResolver } from './graphql/userUpdateResolver';
import { Resolvers } from './schema.types';

export const resolvers: Resolvers = {
  Query: {
    moodNoteOne: moodNoteOneResolver,
    moodNoteMany: moodNoteManyResolver,
    testOne: testOneResolver,
    userOne: userOneResolver,
  },
  Mutation: {
    moodNoteCreate: moodNoteCreateResolver,
    moodNoteUpdate: moodNoteUpdateResolver,
    moodNoteDelete: moodNoteDeleteResolver,
    userAuthenticate: userAuthenticateResolver,
    testCreate: testCreateResolver,
    userCreate: userCreateResolver,
    userUpdate: userUpdateResolver,
    userDelete: userDeleteResolver,
  },
};
