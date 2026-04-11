import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';
import { prisma } from '../prisma';
import { QueryTestOneArgs, Test } from '../schema.types';
import { toTestSchema } from './mappers/test';

export async function testOneResolver(
  _: any,
  { id }: QueryTestOneArgs,
  context: InvocationContext
): Promise<Test> {
  const user = await validateUserAcess(context);

  const test = await prisma.test.findUniqueOrThrow({
    where: {
      id,
      userId: user.id,
    },
    include: {
      answers: true,
    },
  });

  return toTestSchema(test);
}
