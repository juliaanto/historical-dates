import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background-color: ${({ theme }) => theme.color.basicLight};
    color: ${({ theme }) => theme.color.basicDark};
  }

  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.color.basicWhite};
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

    &::after {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      border-top: 2px solid ${({ theme }) => theme.color.basicBlue};
      border-right: 2px solid ${({ theme }) => theme.color.basicBlue};
    }
  }

  .swiper-button-prev {
    left: 20px;

    &::before {
      transform: rotate(225deg) translate(-15%, 15%);
    }
  }

  .swiper-button-next {
    right: 20px;
    
    &::before {
      transform: rotate(45deg) translate(-15%, 15%);
    }
  }

  .swiper-button-disabled {
    display: none;
  }
`;

export default GlobalStyle;
