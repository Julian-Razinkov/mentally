import { User } from '../generated/prisma';

export interface InvocationContext {
  user: User | null;
}
