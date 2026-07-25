import { moodNoteCreateResolver } from './graphql/moodNote/moodNoteCreateResolver';
import { moodNoteDeleteResolver } from './graphql/moodNote/moodNoteDeleteResolver';
import { moodNoteManyResolver } from './graphql/moodNote/moodNoteManyResolver';
import { moodNoteOneResolver } from './graphql/moodNote/moodNoteOneResolver';
import { moodNoteUpdateResolver } from './graphql/moodNote/moodNoteUpdateResolver';
import { testCreateResolver } from './graphql/test/testCreateResolver';
import { testOneResolver } from './graphql/test/testOneResolver';
import { userAuthenticateResolver } from './graphql/user/userAuthenticateResolver';
import { userCreateResolver } from './graphql/user/userCreateResolver';
import { userDeleteResolver } from './graphql/user/userDeleteResolver';
import { userOneResolver } from './graphql/user/userOneResolver';
import { userUpdateResolver } from './graphql/user/userUpdateResolver';
import { waitlistCreateResolver } from './graphql/waitlist/waitlistCreateResolver';
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
    waitlistCreate: waitlistCreateResolver,
  },
};
