import {
  MutationUserCreateArgs,
  User,
  UserAuthenticate,
} from '../../schema.types';
import { userSchema as validationSchema } from 'common/validation/userSchema';
import { parse } from 'valibot';
import { prisma } from '../../prisma';
import { hashPassword } from '../../helpers/hash';
import { Gender } from '../../../generated/prisma';
import { v4 as uuid } from 'uuid';
import { toUserSchema } from '../mappers/user';
import { signJWT } from '../../helpers/auth';

export async function userCreateResolver(
  _: any,
  { input }: MutationUserCreateArgs
): Promise<UserAuthenticate> {
  //TODO: Add functions for validation inside the validation package this thing looks like shit
  // TODO: Implemente better error handling
  try {
    const { name, email, gender, birthDate, password } = parse(
      validationSchema,
      input
    );
    const hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        id: uuid(),
        name,
        // TODO: include real fileds once onboarding is ready
        focus: 'feelCalmer',
        issue: 'focus',
        preferredTool: 'quickTool',
        timeCommitment: 10,
        email,
        gender: gender as Gender,
        birthDate,
        hash,
      },
    });

    const token = signJWT(user);

    return {
      token,
      user: toUserSchema(user),
    };
  } catch (error) {
    throw new Error(`${error}`);
  }
}
