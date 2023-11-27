import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
  padding: 15px 0;
  z-index: 5;
  width: 100%;
  top: 0;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);

  .container {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = styled.nav``;

export const MenuItemsWrap = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  gap: 15px;

  a {
    &:hover {
      color: var(--violet-500);
    }
  }
`;
