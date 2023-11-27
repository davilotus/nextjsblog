import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: 'Categoria %s | WordPress Next Blog',
  },
  description: 'Created by Davidson',
};

export default function BlogCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
