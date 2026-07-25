'use client';

import { useForm } from 'react-hook-form';
import * as v from 'valibot';
import { WaitlistSchema } from './waitlistFormSchema';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Field, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMutation } from '@apollo/client/react';
import { AddWaitlistEmailDocument } from '@/lib/graphql/__generated__/graphql';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';

export const WaitListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(WaitlistSchema, undefined, { raw: true }),
  });

  const [addEmail, { loading, error, data }] = useMutation(
    AddWaitlistEmailDocument
  );

  const onSubmit = (data: v.InferOutput<typeof WaitlistSchema>) => {
    addEmail({ variables: { email: data.email } });
  };

  return !data?.waitlistCreate && !error ? (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start justify-center flex-row gap-3 w-[30%]"
    >
      <Field>
        <Input
          {...register('email')}
          placeholder="your@email.com"
          required
          className="border-accent bg-muted"
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>

      <Button size="lg" className="font-bold" type="submit">
        Join waitlist
      </Button>
    </form>
  ) : (
    <Badge variant="success" size="large" iconStart={<CircleCheck />}>
      {' '}
      You're on the list. Hold tight for updates!
    </Badge>
  );
};
