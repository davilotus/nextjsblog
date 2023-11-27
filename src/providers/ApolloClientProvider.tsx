'use client';

import { client } from '@/api/api';
import { ApolloProvider } from '@apollo/client';

export function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
