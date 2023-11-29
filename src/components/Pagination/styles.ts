import { styled } from 'styled-components';

export const NavWrap = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    background: var(--violet-500);
    color: #fff;
    display: block;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: var(--violet-700);
    }
  }
`;
