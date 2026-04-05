import { User as UserModel } from '../../../generated/prisma';
import { Gender, User } from '../../schema.types';

export function toUserSchema(userModel: UserModel): User {
  const { name, email, gender, birthDate, id } = userModel;

  return {
    id,
    name,
    email,
    gender: gender as Gender,
    birthDate: birthDate?.toISOString(),
  };
}
