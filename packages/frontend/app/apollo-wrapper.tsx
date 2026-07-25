'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloNextAppProvider,
} from '@apollo/client-integration-nextjs';
import { PropsWithChildren } from 'react';

function makeClient() {
  const link = new HttpLink({
    uri: 'http://localhost:4000',
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
}

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
