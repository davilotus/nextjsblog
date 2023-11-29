import Link from 'next/link';

import * as S from './styles';

export function Pagination({ current }: { current: number }) {
  const nextPage = current + 1;
  const previosPage = current - 1 == 1 ? 1 : current - 1;

  const previousLink = previosPage == 1 ? '/' : `/page/${previosPage}`;

  return (
    <S.NavWrap>
      <S.Nav className="nav-links">
        {current >= 2 ? (
          <>
            <Link className="prev page-numbers" href={previousLink}>
              Anterior
            </Link>
            <Link className="next page-numbers" href={`/page/${nextPage}`}>
              Próxima
            </Link>
          </>
        ) : (
          <Link className="next page-numbers" href={`/page/${nextPage}`}>
            Próxima
          </Link>
        )}
      </S.Nav>
    </S.NavWrap>
  );
}
