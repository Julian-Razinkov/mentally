import { prisma } from '../prisma';
import { MoodNote, MoodNotePage, QueryMoodNoteManyArgs } from '../schema.types';
import { toMoodNoteSchema } from './mappers/moodNote';

export async function moodNoteManyResolver(
	_,
	{ input }: QueryMoodNoteManyArgs
): Promise<MoodNotePage> {
	const { skip, take } = input;

	const moodNotes = await prisma.moodNote.findMany({
		take,
		skip,
	});

	return {
		total: await prisma.moodNote.count({}),
		// This looks weird figure out how to return promises right from a resolver
		items: await Promise.all(moodNotes.map(toMoodNoteSchema)),
	};
}
