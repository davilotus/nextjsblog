import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';

import { ApolloClientProvider } from '@/providers/ApolloClientProvider';
import { GlobalStyles } from '@/styles/styles';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | WordPress Next Blog',
  },
  description: 'Created by Davidson',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <GlobalStyles />
      <body>
        <ApolloClientProvider>
          <main>
            <Header />
            {children}
          </main>
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
