import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';
import { User } from '../schema.types';
import { toUserSchema } from './mappers/user';

export async function userOneResolver(
  _: any,
  __: any,
  context: InvocationContext
): Promise<User> {
  const user = await validateUserAcess(context);

  return toUserSchema(user);
}
