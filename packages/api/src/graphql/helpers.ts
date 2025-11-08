import { TestType } from '../../generated/prisma';
import { gad7Titles, Phq9Titles } from '../constants';
import { TestAnswerInput } from '../schema.types';

export function mapTestQuestionTitle(
	type: TestType,
	questionNumber: number
): string {
	if (type === TestType.GAD7) return gad7Titles[questionNumber];
	if (type === TestType.PHQ9) return Phq9Titles[questionNumber];

	throw new Error('Inccorect test type');
}

export function calculateTestScore(answers: TestAnswerInput[]) {
	return answers.reduce((total, curent) => total + curent.score, 0);
}
