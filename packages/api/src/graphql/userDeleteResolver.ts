import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';
import { prisma } from '../prisma';
import { User } from '../schema.types';
import { toUserSchema } from './mappers/user';

export async function userDeleteResolver(
  _: any,
  __: any,
  context: InvocationContext
): Promise<User> {
  const { id } = await validateUserAcess(context);

  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return toUserSchema(user);
}
