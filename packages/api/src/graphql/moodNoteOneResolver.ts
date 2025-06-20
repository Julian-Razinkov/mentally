import { InvocationContext } from '../context';
import { prisma } from '../prisma';
import {
	MoodNote,
	QueryMoodNoteOneArgs,
	QueryResolvers,
} from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteOneResolver(
	_,
	{ id }: QueryMoodNoteOneArgs,
	{ user }: InvocationContext
): Promise<MoodNote> {
	const moodNote = await prisma.moodNote.findUniqueOrThrow({
		where: {
			id,
		},
	});

	return toMoodNoteSchema(moodNote);
}
