import styled from 'styled-components';

export const ShareWrap = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

export const ShareItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;

  span {
    display: none;
  }

  a {
    font-size: 1.25rem; // 20px
    &:hover {
      color: var(--violet-500);
    }
  }
`;
