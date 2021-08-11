import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;

export const Content = styled.div`
  .view-left,
  .view-right {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;
    padding: 4rem 1.5rem;

    .item {
      max-width: 1136px;
      display: flex;
      flex-wrap: wrap;
      z-index: 1;

      > div {
        flex: 50%;
        margin-bottom: 1rem;

        h3 {
          color: ${props => props.theme.secondary};
          font-size: 1.6rem;
          font-weight: 900;
        }

        p {
          font-weight: 400;
          margin-top: 16px;
          font-size: 1rem;
        }
      }

      iframe {
        width: 50%;
        height: 320px;
        border-radius: 8px;
      }
    }
  }

  .view-left {
    .background {
      position: absolute;
      width: 70%;
      height: 100%;
      left: 0;
      top: 0;
      background: ${props => props.theme.container};
    }

    .item {
      > div {
        padding-right: 24px;

        iframe {
          margin-top: 8px;
        }
      }
    }
  }

  .view-right {
    .background {
      position: absolute;
      width: 70%;
      height: 100%;
      right: 0;
      top: 0;
      background: ${props => props.theme.container};
    }

    .item {
      > div {
        padding-left: 24px;
      }

      iframe {
        margin-bottom: 16px;
      }
    }
  }

  a {
    margin: 0 24px;
    margin-top: -64px;
  }

  @media (max-width: 1200px) {
    .view-right,
    .view-left {
      .background {
        width: 100%;
      }

      .item {
        > div {
          flex: 100%;
          padding: 0;
        }

        iframe {
          width: 100%;
          height: 500px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .view-right,
    .view-left {
      .item {
        > div {
          h3 {
            font-size: 1.5rem;
          }
        }

        iframe {
          height: 350px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .benefit {
      .items {
        .item {
          > div {
            flex: 100%;
          }

          h3 {
            font-size: 1rem;
          }
        }
      }
    }

    .view-right,
    .view-left {
      .item {
        iframe {
          height: 250px;
        }
      }
    }
  }
`;
