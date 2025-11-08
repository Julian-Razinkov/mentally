import { TestAnswer, Test as TestModel } from '../../../generated/prisma';
import { Test, TestType } from '../../schema.types';
import { mapTestQuestionTitle } from '../helpers';

export function toTestSchema(
	test: TestModel & { answers: TestAnswer[] }
): Test {
	const { id, type, score, createdAt, answers } = test;

	return {
		id,
		type: type as TestType,
		score,
		createdAt: createdAt.toISOString(),
		answers: answers.map(({ id, questionNumber, score }) => ({
			id,
			questionNumber,
			questionTitle: mapTestQuestionTitle(type, questionNumber),
			score,
		})),
	};
}
