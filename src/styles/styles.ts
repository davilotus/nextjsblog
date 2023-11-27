'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --violet-500: #8257e5;
    --violet-700: #633bbc;
    --gray-700: #252526;
    --gray-900: #18191a;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* @font-face {
    font-family: 'Ubuntu-Regular';
    src: local('Ubuntu-Regular'), url('/fonts/Ubuntu-Regular.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu-Medium';
    src: local('Ubuntu-Medium'), url('/fonts/Ubuntu-Medium.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu-Bold';
    src: local('Ubuntu-Bold'), url('/fonts/Ubuntu-Bold.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  } */

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--gray-900);
    overflow-x: hidden;
    color: #e4e6eb;
    font-weight: 400;
    line-height: 1.4;
  }

  main {
    padding-top: 100px;
    padding-bottom: 40px;
    position: relative;
    width: 100%;
    min-height: calc(100vh - 62px);
  }

  img {
    max-width: 100%;
    height: initial;
    vertical-align: middle;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 1400px) {
      max-width: 1140px;
    }

    @media (max-width: 1199px) {
      max-width: 960px
    }

    @media (max-width: 991px){
      max-width: 720px;
    }

    @media (max-width: 767px) {
      max-width: 540px;
    }

    @media (max-width: 575px) {
      max-width: 100%;
    }
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    
    &.space-between {
      justify-content: space-between;
    }
    
    &.alig-itens-center {
      align-items: center;
    }
    
		&.gap {
      gap: 30px;
			flex-flow: row;
		}
    
    &.posts {
      align-items: flex-start;
      width: calc(100% - 270px);
      gap: 30px;
    }
  }

  a {
    transition: all 0.3s ease;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0 0 20px;
  }

  p, ul, ol{
    margin-bottom: 20px;
    line-height: 2;
  }

  ul, ol{
    margin-bottom: 20px;
    padding-left: 20px;
  }

  input, button {
    outline: none;
    transition: all .3s ease;

    &[type="submit"], 
    &[type="button"]{
      cursor: pointer;
    }
  }

  pre {
    margin-bottom: 20px;
  }

`;
