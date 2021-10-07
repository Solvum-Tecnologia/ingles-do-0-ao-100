import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  /* .background {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    min-height: 80vh;
    background: url('/assets/images/background.png') no-repeat;
    background-size: cover;
    z-index: 1;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  z-index: 2;
  padding: 0 24px;
  padding-top: 24px;
  background: url('/assets/images/background.png') no-repeat;
  background-size: cover;
  overflow: hidden;

  .header {
    max-width: 1136px;
    width: 100%;
  }

  .banner {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;

    .text-men {
      max-width: 800px;
      display: flex;
      flex: 100%;
      justify-content: space-between;

      .text {
        flex: 50%;
        padding-top: 24px;

        h2,
        h3 {
          text-align: left;
          letter-spacing: -1px;
          max-width: 580px;
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
        align-self: flex-end;
        margin-right: -24px;
        max-width: 400px;

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

    > div {
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
    min-height: 100vh;
    > div {
      .text-men {
        .text {
          max-width: 400px;
          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1rem;
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
        flex-wrap: wrap;
        justify-content: center;
        .text {
          margin-top: 100px;
          min-width: 100%;
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
      iframe {
        max-height: 200px;
      }
    }
  }
`;
