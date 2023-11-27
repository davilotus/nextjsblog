import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
  position: relative;

  span {
    display: block;
    margin: 0 auto;
  }

  a {
    &:hover {
      color: var(--violet-500);
    }
  }

  .grid {
    &::before {
      width: calc(1200px - 30px);
      max-width: calc(100% - 30px);
      background: rgba(255, 255, 255, 0.1);
      height: 1px;
      position: absolute;
      top: 0;
      content: '';
    }
  }
`;
