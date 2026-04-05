import * as v from 'valibot';
import { Gender } from '@mentally/api/src/schema.types';

export const userSchema = v.object({
  name: v.pipe(
    v.string('Name must be a string'),
    v.maxLength(20, 'Maximal name length is 20 characters'),
    v.nonEmpty('Name is required')
  ),
  email: v.pipe(
    v.string('Email must be a string'),
    v.nonEmpty('Email is required'),
    v.email('Invalid adress')
  ),
  gender: v.enum(Gender, 'Invalid gender'),
  password: v.pipe(
    v.string('Password must be a string'),
    v.nonEmpty('Password is required'),
    v.minLength(8, 'Password must be a least 8 characters long'),
    v.maxLength(64, 'Password can not be longer than 64 characters')
  ),
  birthDate: v.pipe(v.string()),
});

export const updateUserSchema = v.partial(userSchema);
