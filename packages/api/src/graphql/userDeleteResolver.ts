import { prisma } from '../prisma';
import { MutationUserDeleteArgs, User } from '../schema.types';
import { toUserSchema } from './mappers/user';

export async function userDeleteResolver(
  _: any,
  { id }: MutationUserDeleteArgs
): Promise<User> {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return toUserSchema(user);
}
