import { userAuthSchema } from '@mentally/common/validation/userSchema';
import {
  MutationUserAuthenticateArgs,
  UserAuthenticate,
} from '../schema.types';
import { parse } from 'valibot';
import { comparePassword, hashPassword } from '../helpers/hash';
import { prisma } from '../prisma';
import { GraphQLError } from 'graphql';
import { signJWT } from '../helpers/auth';
import { toUserSchema } from './mappers/user';

export async function userAuthenticateResolver(
  _: any,
  { input }: MutationUserAuthenticateArgs
): Promise<UserAuthenticate> {
  const { email, password } = parse(userAuthSchema, input);

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const isPasswordCorrect = await comparePassword(password, user.hash);

  if (!isPasswordCorrect) throw new GraphQLError('WrongCredentials');

  const token = signJWT(user);

  return {
    token,
    user: toUserSchema(user),
  };
}
