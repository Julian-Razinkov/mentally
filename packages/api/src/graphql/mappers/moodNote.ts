import { Mood, MoodNote } from '../../schema.types';
import { MoodNote as MoodNoteModel } from '../../../generated/prisma';

export async function toMoodNoteSchema(
	model: MoodNoteModel
): Promise<MoodNote> {
	return {
		id: model.id,
		mood: model.mood as Mood,
		title: model.title,
	};
}
