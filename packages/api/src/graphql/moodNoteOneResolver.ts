import { prisma } from '../prisma';
import { MoodNote, QueryMoodNoteOneArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';
import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';

export async function moodNoteOneResolver(
  _: any,
  { id }: QueryMoodNoteOneArgs,
  context: InvocationContext
): Promise<MoodNote> {
  const user = await validateUserAcess(context);

  const moodNote = await prisma.moodNote.findUniqueOrThrow({
    where: {
      id,
      userId: user.id,
    },
    include: {
      tags: {
        select: {
          moodTag: true,
        },
      },
    },
  });

  return toMoodNoteSchema(moodNote);
}
