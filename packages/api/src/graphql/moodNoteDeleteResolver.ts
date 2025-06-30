import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteDeleteArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteDeleteResolver(
	_,
	{ id }: MutationMoodNoteDeleteArgs
): Promise<MoodNote> {
	const note = await prisma.moodNote.delete({
		where: { id },
	});

	return toMoodNoteSchema(note);
}
