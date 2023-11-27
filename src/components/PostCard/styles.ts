import { styled } from 'styled-components';

export const PostCard = styled.article`
  transition: all 0.3s ease;
  width: 100%;
  max-width: 270px;
  border-radius: 4px;
  outline: 2px solid transparent;

  figure {
    border-radius: 4px 4px 0 0;
    position: relative;
    overflow: hidden;
    margin: 0;
  }

  img {
    transition: all 0.3s ease;
    width: 100%;
    aspect-ratio: 16/11;
    object-fit: cover;
  }

  .categoria {
    position: absolute;
    background: var(--violet-500);
    z-index: 1;
    color: #fff;
    padding: 3px 8px;
    border-radius: 4px;
    top: 10px;
    left: 10px;
    font-size: 12px;

    &:hover {
      background: var(--violet-700);
    }
  }

  .info {
    display: block;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-top: none;
    border-radius: 0 0 4px 4px;
    background: #252526;
  }

  h3 {
    font-size: 1.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    max-height: 44px;
    min-height: 44px;
    line-height: 1.2;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.3;
    color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    max-height: 57px;
    margin: 0 0 20px;
  }

  .more {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  time {
    color: #fff;
    font-size: 0.85rem;
  }

  span {
    transition: all 0.3s ease;
    font-size: 0.85rem;
    color: var(--violet-500);
    position: relative;
    text-transform: uppercase;
    overflow: hidden;
    position: relative;

    i {
      transition: all 0.3s ease;
      width: 15px;
      height: 1px;
      position: relative;
      float: right;
      background: var(--violet-500);
      top: 9px;
      margin: 0 -15px 0 0;
      opacity: 0;

      &::before,
      &::after {
        content: '';
        position: absolute;
        background: var(--violet-500);
        width: 7px;
        height: 1px;
        right: 0;
      }

      &::before {
        top: -2px;
        transform: rotate(40deg);
      }

      &::after {
        top: 2px;
        transform: rotate(-40deg);
      }
    }

    &:hover {
    }
  }

  &:hover {
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.09);
    outline: 2px solid var(--violet-500);

    img {
      transform: scale(1.03);
    }

    .info {
      border-color: rgba(0, 0, 0, 0.05);
    }

    span {
      i {
        opacity: 1;
        margin: 0 0 0 7px;
      }
    }
  }

  /* @media (max-width: 1199px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: .8rem;
    }

    .info {
      padding: 10px;
    }
  } */
`;
