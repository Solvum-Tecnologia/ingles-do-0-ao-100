import styled from 'styled-components';

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
  padding: 0 24px;
  overflow: hidden;
  min-height: 80vh;
  background: url('/assets/images/background.png') no-repeat;
  background-size: cover;

  > div {
    z-index: 1;
    flex: 1;
    max-width: 1136px;
    display: flex;
    flex-direction: column;

    .logo {
      margin-top: 50px;
    }

    .text-men {
      display: flex;
      flex: 100%;

      .text {
        flex: 70%;
        align-self: center;

        h2 {
          font-weight: bold;
          font-size: 32px;
        }

        h3 {
          font-weight: 500;
          font-size: 24px;
          margin-top: 16px;
        }
      }

      .men {
        flex: 30%;
        display: flex;
        align-self: flex-end;
        margin-right: -24px;

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
    min-height: 100vh;
    > div {
      .text-men {
        .text {
          h2 {
            font-size: 24px;
          }

          h3 {
            font-size: 16px;
          }
        }

        .men {
          max-height: 350px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    > div {
      .text-men {
        .men {
          display: none;
        }
      }
    }
  }

  @media (max-width: 480px) {
  }
`;

export const Preview = styled.div`
  background: ${props => props.theme.container};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  z-index: 1;

  > div {
    padding: 64px 0;

    h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 16px;
    }
    max-width: 1136px;
    flex: 1;

    button {
      margin-bottom: -120px;
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
      iframe {
        max-height: 200px;
      }
    }
  }
`;
