import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: url('/assets/images/background.png') no-repeat;
  background-size: 100% 100%;

  .black {
    background: #212121;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 8px;
    position: fixed;
    top: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 100;

    img {
      height: 60px;
      max-width: 120px;
      width: 100%;
    }

    .mobile {
      display: none;
      justify-content: flex-end;
      flex: 1;
      margin-top: -24px;

      img {
        height: 100px;
        max-width: 180px;
      }
    }
  }

  @media (max-width: 768px) {
    .black {
      background: none;
      box-shadow: none;
      position: relative;

      .mobile {
        display: flex;
      }

      .desktop {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 400px;
  z-index: 2;
  padding: 0 24px;
  padding-top: 24px;

  overflow: hidden;

  .header {
    max-width: 1136px;
    width: 100%;
  }

  .banner {
    max-width: 1136px;
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 40px;

    .button {
      margin-top: 40px;
      > div {
        display: block;
      }
    }

    .text-men {
      display: flex;
      flex: 100%;
      justify-content: space-between;
      gap: 32px;

      .text {
        flex: 50%;
        max-width: 600px;
        padding-top: 40px;

        padding-bottom: 24px;

        h2,
        h3 {
          text-align: left;
          letter-spacing: -1px;
        }

        h2 {
          font-weight: bold;
          font-size: 2rem;
        }

        h3 {
          font-weight: 500;
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 24px;
        }
      }

      .men {
        flex: 50%;
        display: flex;
        margin-right: -24px;
        max-width: 400px;
        margin-top: -80px;

        img {
          width: 100%;
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

    .banner {
      .text-men {
        .text {
          max-width: 500px;
        }

        .men {
          max-width: 250px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    .banner {
      min-height: calc(100vh - 100px);

      padding: 32px 0;

      .button {
        > div {
          display: flex;
        }
      }

      .logo {
        width: 180px;
        align-self: center;

        img {
          width: 100%;
        }
      }
      .text-men {
        .text {
          max-width: 100%;
          h2,
          h3 {
            text-align: center;
          }
          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1rem;
          }
        }

        .men {
          max-height: 350px;
          display: none;
        }
      }
    }
  }
`;

export const Preview = styled.div`
  background: ${props => props.theme.container};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  z-index: 1;

  > div {
    padding: 4rem 0;
    max-width: 1136px;
    flex: 1;

    h2 {
      text-align: center;
      font-size: 2rem;
    }

    a {
      margin-bottom: -8rem;
    }

    iframe {
      width: 100%;
      height: 600px;
      border-radius: 8px;
      margin-top: 2rem;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    > div {
      h2 {
        font-size: 1.5rem;
      }

      iframe {
        max-height: 400px;
      }
    }
  }

  @media (max-width: 576px) {
    > div {
      h2 {
        font-size: 1.2rem;
      }
      iframe {
        max-height: 200px;
      }
    }
  }
`;
