import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteUpdateArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteUpdateResolver(
	_,
	{ id, input }: MutationMoodNoteUpdateArgs
): Promise<MoodNote> {
const { emotion, title } = input;
	const note = await prisma.moodNote.update({
		where: {
			id,
		},
		data: {
			emotion: emotion ?? undefined,
			title: title ?? undefined,
		},
	});

	return toMoodNoteSchema(note);
}
