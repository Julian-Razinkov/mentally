import { sign, verify } from 'jsonwebtoken';
import { prisma } from '../prisma';
import { GraphQLError } from 'graphql';
import { InvocationContext } from '../context';
import { User } from '../../generated/prisma';

//TODO: Split responsibilities
// TODO: Implement stronger and more consistent typing
// TODO: Implement error handling with graphql codes
// TODO: Add bearer token

export async function getUserFromJWT(token: string) {
  try {
    // TODO: Type the env variables (this part smells)

    //TODO: FIX THIS!!!
    const decoded = verify(token, process.env.JWT_SECRET as string) as any;

    const userId = decoded.userId;

    if (typeof userId !== 'string') return null;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error: any) {
    return null;
  }
}

export async function validateUserAcess(context: InvocationContext) {
  if (!context.user) {
    throw new GraphQLError('Authentication required', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }
  return context.user;
}

//TODO: Implement auth with refresh and accessToken and set expiration time and refreshing much shorter
export function signJWT(user: User) {
  const token = sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
      issuer: 'mentally',
      audience: 'mentally-users',
    }
  );

  return token;
}
