import { InvocationContext } from '../context';
import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteDeleteArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';
import { validateUserAcess } from '../helpers/auth';

export async function moodNoteDeleteResolver(
  _: any,
  { id }: MutationMoodNoteDeleteArgs,
  context: InvocationContext
): Promise<MoodNote> {
  const user = await validateUserAcess(context);

  const note = await prisma.moodNote.delete({
    where: { id, userId: user.id },
    include: {
      tags: {
        select: {
          moodTag: true,
        },
      },
    },
  });

  return toMoodNoteSchema(note);
}
