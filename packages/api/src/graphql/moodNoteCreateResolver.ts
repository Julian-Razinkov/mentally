import { prisma } from '../prisma';
import { MoodNote, MutationMoodNoteCreateArgs } from '../schema.types';
import { v7 as uuid7 } from 'uuid';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteCreateResolver(
	_,
	{ input }: MutationMoodNoteCreateArgs
): Promise<MoodNote> {
	const { title, mood } = input;
	const note = await prisma.moodNote.create({
		data: {
			id: uuid7(),
			mood,
			title,
		},
	});

	return toMoodNoteSchema(note);
}
