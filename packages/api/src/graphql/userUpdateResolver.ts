import { MutationUserUpdateArgs, User } from '../schema.types';
import { updateUserSchema as validationSchema } from '@mentally/common/validation/userSchema';
import { parse } from 'valibot';
import { prisma } from '../prisma';
import { Gender } from '../../generated/prisma';
import { toUserSchema } from './mappers/user';

export async function userUpdateResolver(
  _: any,
  { input }: MutationUserUpdateArgs
): Promise<User> {
  try {
    const { name, email, gender, birthDate } = parse(validationSchema, input);

    const user = await prisma.user.update({
      where: {
        id: input.id,
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
