import { prisma } from '../prisma';
import { QueryTestOneArgs, Test } from '../schema.types';
import { toTestSchema } from './mappers/test';

export async function testOneResolver(
	_: any,
	{ id }: QueryTestOneArgs
): Promise<Test> {
	const test = await prisma.test.findUniqueOrThrow({
		where: {
			id,
		},
		include: {
			answers: true,
		},
	});

	return toTestSchema(test);
}
