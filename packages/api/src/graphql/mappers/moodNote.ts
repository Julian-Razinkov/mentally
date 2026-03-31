import { Emotion, MoodCategory, MoodNote } from '../../schema.types';
import { MoodNote as MoodNoteModel, MoodTag } from '../../../generated/prisma';

export async function toMoodNoteSchema(
  model: MoodNoteModel & { tags: Array<{ moodTag: MoodTag }> }
): Promise<MoodNote> {
  return {
    id: model.id,
    emotion: model.emotion as Emotion,
    intencity: model.intencity,
    title: model.title,
    description: model.description,
    tags: model.tags.map(({ moodTag }) => {
      return {
        name: moodTag.name,
        category: moodTag.category as MoodCategory,
      };
    }),
  };
}
