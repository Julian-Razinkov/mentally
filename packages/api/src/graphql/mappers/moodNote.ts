import { Emotion, MoodNote } from '../../schema.types';
import { MoodNote as MoodNoteModel } from '../../../generated/prisma';

export async function toMoodNoteSchema(
	model: MoodNoteModel
): Promise<MoodNote> {
	return {
		id: model.id,
		emotion: model.emotion as Emotion,
		intencity: model.intencity,
		title: model.title,
		description: model.description,
		// TODO: Map tags
		tags: [],
	};
}
