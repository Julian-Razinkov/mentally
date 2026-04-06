import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteCreateArgs } from '../schema.types';
import { v7 as uuid7 } from 'uuid';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteCreateResolver(
  _,
  { input }: MutationMoodNoteCreateArgs
): Promise<MoodNote> {
  const { title, tags, intencity, emotion, description, activityId } = input;

  // Will be pulled from the auth later
  const placeholder = 'f29ca143-fdef-4d01-a31e-7b6b4d1c8b32';

  const noteId = uuid7();
  const note = await prisma.moodNote.create({
    data: {
      id: noteId,
      emotion,
      title,
      intencity,
      description,
      activityId,
      userId: placeholder,
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
        },
      },
    },
  });

  return toMoodNoteSchema(note);
}
