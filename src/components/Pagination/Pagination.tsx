import * as S from './styles';

export function Pagination() {
  return (
    <S.NavWrap>
      <nav>
        <S.NavLinks className="nav-links">
          <a className="prev page-numbers" href="#">
            <i className="icon-left-open"></i>
          </a>
          <span aria-current="page" className="page-numbers current">
            1
          </span>
          <a className="page-numbers" href="#">
            2
          </a>
          <a className="page-numbers" href="#">
            3
          </a>
          <a className="next page-numbers" href="#">
            <i className="icon-right-open"></i>
          </a>
        </S.NavLinks>
      </nav>
    </S.NavWrap>
  );
}
