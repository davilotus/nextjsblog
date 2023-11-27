'use client';

import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 40px;
  background-size: cover;
  background-position: center;
  align-items: center;
  text-align: center;
  padding: 80px 0;
  min-height: 400px;
  width: 100%;
  border-radius: 8px;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    content: '';
    border-radius: 8px;
    background: rgba(24, 25, 26, 0.7);
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .grid {
    flex-direction: column;
  }

  .category {
    background: #8257e5;
    display: table;
    margin: 0 auto 10px;
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 0.75rem; // 12px

    &:hover {
      background: #633bbc;
    }
  }
`;

export const After = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scale(1.1) translateY(-50%);
  filter: blur(30px);
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: top;
  z-index: -1;
  opacity: 0.15;
  top: 50%;
`;

export const Content = styled.div`
  width: 100%;

  pre {
    padding: 15px;
    background: var(--gray-700);
    border-radius: 6px;
  }
`;
