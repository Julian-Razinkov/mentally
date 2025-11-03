import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteDeleteArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteDeleteResolver(
  _: any,
  { id }: MutationMoodNoteDeleteArgs
): Promise<MoodNote> {
  const note = await prisma.moodNote.delete({
    where: { id },
    include: {
      tags: {
        select: {
          moodTag: true,
        }
      }
    }
  });

  return toMoodNoteSchema(note);
}
