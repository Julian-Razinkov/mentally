import { InvocationContext } from '../context';
import { validateUserAcess } from '../helpers/auth';
import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteUpdateArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteUpdateResolver(
  _: any,
  { id, input }: MutationMoodNoteUpdateArgs,
  context: InvocationContext
): Promise<MoodNote> {
  const user = await validateUserAcess(context);

  const { emotion, title } = input;
  const note = await prisma.moodNote.update({
    where: {
      id,
      userId: user.id,
    },
    data: {
      emotion: emotion ?? undefined,
      title: title ?? undefined,
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
