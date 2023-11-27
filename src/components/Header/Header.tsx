'use client';

import Link from 'next/link';

import { SearchForm } from '@/components/SearchForm';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <div className="container">
        <div className="grid space-between alig-itens-center">
          <Link href="/">Blog</Link>
          <SearchForm />
        </div>
      </div>
    </S.Header>
  );
}
