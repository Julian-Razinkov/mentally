import * as v from 'valibot';

export const WaitlistSchema = v.object({
  email: v.pipe(
    v.string('Please enter valid email'),
    v.nonEmpty('Please enter valid email'),
    v.email('Please enter valid email')
  ),
});

export type WaitlistForm = v.InferOutput<typeof WaitlistSchema>;
