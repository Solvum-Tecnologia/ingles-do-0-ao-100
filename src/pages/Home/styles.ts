import styled, { keyframes } from 'styled-components';

const animateRotate = keyframes`
  0% {
    transform: rotate(0) scale(0);
    opacity: 0;
  }

  100% {
    transform: rotate(405deg) scale(1);
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0 16px;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    width: 807px;
    height: 455px;
    position: absolute;
    background: url('/assets/images/eua.svg') no-repeat;
    background-size: contain;
    transform: rotate(45deg);
  }

  &::after {
    bottom: -20%;
    left: -30%;
    animation: ${animateRotate} 0.6s ease;
    animation-fill-mode: backwards;
  }
  &::before {
    top: -20%;
    right: -30%;
    animation: ${animateRotate} 0.6s ease;
    animation-fill-mode: backwards;
  }

  div {
    z-index: 1;
    flex: 1;
    max-width: 1136px;

    .logo {
      margin-top: 32px;
    }

    .text-men {
      display: flex;
      padding-top: 50px;
      max-height: 70vh;

      .text {
        flex: 70%;

        h2 {
          font-weight: bold;
          font-size: 32px;
        }

        h3 {
          font-weight: 500;
          font-size: 24px;
          margin-top: 8px;
        }
      }

      .men {
        flex: 30%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    &::after {
      bottom: -40%;
      left: -40%;
    }
    &::before {
      top: -40%;
      right: -40%;
    }
  }

  @media (max-width: 992px) {
    &::after {
      bottom: -50%;
      left: -60%;
    }
    &::before {
      top: -50%;
      right: -60%;
    }
  }

  @media (max-width: 768px) {
    .text-men {
      .text {
        h2 {
          font-size: 24px;
        }
      }

      .men {
        max-height: 350px;
      }
    }

    &::after,
    &::before {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .text-men {
      .text {
        h2,
        h3 {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .text-men {
      padding: 50px 0;

      .men {
        display: none;
      }
    }
  }

  @media (max-height: 480px) {
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const Preview = styled.div`
  background: ${props => props.theme.container};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  z-index: 1;

  > div {
    padding: 16px 0;
    h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 16px;
    }
    max-width: 1136px;
    flex: 1;

    button {
      margin-top: 24px;
      margin-bottom: 16px;
    }

    iframe {
      width: 100%;
      height: 600px;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    > div {
      h2 {
        font-size: 24px;
      }

      iframe {
        max-height: 400px;
      }
    }
  }

  @media (max-width: 576px) {
    > div {
      h2 {
        font-size: 16px;
      }

      iframe {
        max-height: 200px;
      }
    }
  }
`;
