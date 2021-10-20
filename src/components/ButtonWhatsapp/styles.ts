import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 999;

  a {
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;

    .icon {
      background: #1d9a00;
      padding: 16px;
      display: flex;
      border-radius: 50%;
      height: 56px;
      width: 56px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #ffffff;
        font-size: 32px;
      }
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      z-index: 10;
    }

    .text {
      background: #1d9a00;
      left: 16px;
      height: 48px;
      width: 300px;

      display: flex;
      align-items: center;
      z-index: 9;
      transition: 0.3s ease all;
      padding-left: 48px;
      padding-right: 16px;
      border-radius: 500px;
      transform: translateX(-50%) scaleX(0);
      font-weight: 900;
      opacity: 0;
      position: absolute;
    }

    &:hover .text {
      transform: translateX(0) scaleX(1);
      opacity: 1;
    }
  }

  @media (max-width: 767.98px) {
    bottom: 8px;
    left: 8px;

    a {
      .icon {
        height: 48px;
        width: 48px;
        padding: 8px;
        font-size: 24px;
      }

      .text {
        height: 40px;
        width: 180px;
        font-size: 12px;
      }
    }
  }
`;
