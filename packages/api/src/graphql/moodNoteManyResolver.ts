import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';
import { prisma } from '../prisma';
import { MoodNotePage, QueryMoodNoteManyArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteManyResolver(
  _: any,
  { input }: QueryMoodNoteManyArgs,
  context: InvocationContext
): Promise<MoodNotePage> {
  const user = await validateUserAcess(context);

  const { skip, take } = input;

  const moodNotes = await prisma.moodNote.findMany({
    where: {
      userId: user.id,
    },
    take,
    skip,
    include: {
      tags: {
        select: {
          moodTag: true,
        },
      },
    },
  });

  return {
    total: await prisma.moodNote.count({}),
    // This looks weird figure out how to return promises right from a resolver
    items: await Promise.all(moodNotes.map(toMoodNoteSchema)),
  };
}
