'use client';

import { useForm } from 'react-hook-form';
import * as v from 'valibot';
import { WaitlistSchema } from './waitlistFormSchema';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Field, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { error } from 'node:console';

export const WaitListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(WaitlistSchema, undefined, { raw: true }),
  });

  const onSubmit = (data: v.InferOutput<typeof WaitlistSchema>) => {
    //TODO: Replace with a real mutation once the gql point is ready
    console.log(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start justify-center flex-row gap-3 w-[30%]"
    >
      <Field>
        <Input
          {...register('email')}
          placeholder="your@email.com"
          required
          className="border-[#D9D4CD] bg-[#EDE8DF]"
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>

      <Button
        size="lg"
        className="bg-[#1F1B2E] text-[#C9B8F8] font-bold"
        type="submit"
      >
        Join waitlist
      </Button>
    </form>
  );
};
