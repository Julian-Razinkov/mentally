import { v7 as uuid } from 'uuid';
import { prisma } from '../prisma';
import { MutationTestCreateArgs, Test, TestType } from '../schema.types';
import { calculateTestScore } from './helpers';
import { toTestSchema } from './mappers/test';
import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';

export async function testCreateResolver(
  _: any,
  { input }: MutationTestCreateArgs,
  context: InvocationContext
): Promise<Test> {
  const user = await validateUserAcess(context);

  const { type, answers } = input;
  const id = uuid();
  const score = calculateTestScore(answers);

  const test = await prisma.test.create({
    data: {
      id,
      score,
      type: type as TestType,
      userId: user.id,
      answers: {
        createMany: {
          data: answers.map(({ questionNumber, score }) => ({
            id: uuid(),
            questionNumber,
            score,
          })),
        },
      },
    },
    include: {
      answers: true,
    },
  });

  return toTestSchema(test);
}
