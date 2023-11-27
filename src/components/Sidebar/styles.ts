import { styled } from 'styled-components';

export const Sidebar = styled.aside`
  max-width: 270px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 100px;
  margin: 0 0 30px;
  align-self: flex-start;
`;

export const ItemSidebar = styled.div`
  padding: 15px;
  margin: 0 0 20px;
  border-radius: 4px;
  background: #252526;
`;

export const TitleSidebar = styled.h3`
  font-size: 1.175rem;
  margin: inherit;
`;

export const ListSidebar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    padding: 5px;
    display: block;
    line-height: 1.5;

    &:hover {
      color: var(--violet-500);
      padding-left: 10px;
    }
  }
`;
