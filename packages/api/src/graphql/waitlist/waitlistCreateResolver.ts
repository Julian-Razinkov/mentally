import { v4 } from 'uuid';
import { prisma } from '../../prisma';
import { MutationWaitlistCreateArgs } from '../../schema.types';

export async function waitlistCreateResolver(
  _,
  { email }: MutationWaitlistCreateArgs
): Promise<boolean> {
  try {
    await prisma.waitlist.create({
      data: {
        email,
        id: v4(),
      },
    });

    return true;
  } catch (error) {
    return false;
  }
}
