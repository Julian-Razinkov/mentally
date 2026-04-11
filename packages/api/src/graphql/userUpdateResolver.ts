import { MutationUserUpdateArgs, User } from '../schema.types';
import { updateUserSchema as validationSchema } from '@mentally/common/validation/userSchema';
import { parse } from 'valibot';
import { prisma } from '../prisma';
import { Gender } from '../../generated/prisma';
import { toUserSchema } from './mappers/user';
import { validateUserAcess } from '../helpers/auth';
import { InvocationContext } from '../context';

export async function userUpdateResolver(
  _: any,
  { input }: MutationUserUpdateArgs,
  context: InvocationContext
): Promise<User> {
  try {
    const { id } = await validateUserAcess(context);

    const { name, email, gender, birthDate } = parse(validationSchema, input);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        gender: gender as Gender,
        birthDate,
      },
    });

    return toUserSchema(user);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
