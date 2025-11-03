import { prisma } from '../prisma';
import { MoodNote, QueryMoodNoteOneArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteOneResolver(
  _: any,
  { id }: QueryMoodNoteOneArgs
): Promise<MoodNote> {
  const moodNote = await prisma.moodNote.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      tags: {
        select: {
          moodTag: true,
        }
      }
    }
  });

  console.log('Where is the loging man???');

  return toMoodNoteSchema(moodNote);
}
