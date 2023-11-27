import { styled } from 'styled-components';

export const NavWrap = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  margin: 0 0 20px 0;

  a {
    float: left;
    font-family: 'Ubuntu-Medium';
    color: #000;
    padding: 6px 10px;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.03);

    i {
      line-height: 1;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.14);
    }
  }

  .current {
    padding: 6px 10px;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    float: left;
    font-family: 'Ubuntu-Medium';
    color: #fff;
    background: var(--violet-500);
  }

  .dots {
    display: block;
    float: left;
  }

  &.initial {
    a {
      height: initial;
      width: initial;
      background: transparent;
      font-family: 'Ubuntu-Bold';
      padding: 6px 0;

      &:hover {
        color: $blue;
      }
    }
  }
`;

export const NavLinks = styled.div`
  position: relative;
  text-align: center;
  display: table;
  margin: 0 auto;

  & > * {
    margin: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
