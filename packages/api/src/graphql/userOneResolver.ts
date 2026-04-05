import { prisma } from '../prisma';
import { QueryUserOneArgs, User } from '../schema.types';
import { toUserSchema } from './mappers/user';

export async function userOneResolver(
  _: any,
  { id }: QueryUserOneArgs
): Promise<User> {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return toUserSchema(user);
}
