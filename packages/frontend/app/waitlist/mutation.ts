import { gql } from '@apollo/client';

export const waitlistMutation = gql`
  mutation AddWaitlistEmail($email: String!) {
    waitlistCreate(email: $email)
  }
`;
