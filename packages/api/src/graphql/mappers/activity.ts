import { Activity as ActivityModel } from '../../../generated/prisma';
import { Activity } from '../../schema.types';

export function toActivitySchema(
	activity?: ActivityModel | null
): Activity | undefined {
	if (activity == null) return undefined;

	const { id, name, description } = activity;
	return {
		id,
		name,
		description,
	};
}
