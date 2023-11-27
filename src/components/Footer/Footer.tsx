'use client';

import Link from 'next/link';

import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <div className="grid">
          <span>
            Made with{' '}
            <Link href="https://nextjs.org/" target="_blank" rel="noopener">
              Next.js
            </Link>
          </span>
        </div>
      </div>
    </S.Footer>
  );
}
