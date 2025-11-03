import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteCreateArgs } from '../schema.types';
import { v7 as uuid7 } from 'uuid';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteCreateResolver(
  _,
  { input }: MutationMoodNoteCreateArgs
): Promise<MoodNote> {
  const { title, tags, intencity, emotion, description, activityId } = input;

  const noteId = uuid7();
  const note = await prisma.moodNote.create({
    data: {
      id: noteId,
      emotion,
      title,
      intencity,
      description,
      activityId,
      tags: {
        createMany: {
          skipDuplicates: true,
          data: tags.map(({ name }) => ({
            moodTagName: name,
          })),
        },
      },
    },
    include: {
      tags: {
        select: {
          moodTag: true,
        }
      }
    },
  });

  return toMoodNoteSchema(note);
}
