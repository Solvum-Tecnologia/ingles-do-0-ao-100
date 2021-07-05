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
    margin: 24px 0;
    position: relative;
    padding: 64px 24px;

    .item {
      max-width: 1136px;
      display: flex;
      flex-wrap: wrap;
      z-index: 1;

      > div {
        flex: 50%;
        margin-bottom: 16px;

        h2 {
          color: ${props => props.theme.secondary};
          font-size: 24px;
        }

        p {
          font-weight: 400;
          margin-top: 16px;
          font-size: 16px;
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

  button {
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
    h2 {
      font-size: 24px;
    }

    .view-right,
    .view-left {
      .item {
        iframe {
          height: 350px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 16px;
    }

    .benefit {
      .items {
        .item {
          flex: 100%;
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
