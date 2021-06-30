import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  .benefit {
    max-width: 1136px;
    margin: 0 16px;
    margin-bottom: 40px;

    h2 {
      text-align: center;
      font-size: 32px;
    }

    .items {
      display: flex;
      flex-wrap: wrap;

      .item {
        flex: 50%;
        padding: 24px 16px;
        display: flex;

        span {
          margin-right: 8px;
          font-size: 24px;
          margin-top: 4px;
          color: ${props => props.theme.secondary};
        }
      }
    }
  }

  .view-left,
  .view-right {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 16px;
    position: relative;
    padding: 40px 16px;

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
          margin-top: 8px;
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
        padding-right: 16px;

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
        padding-left: 16px;
      }

      iframe {
        margin-bottom: 16px;
      }
    }
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
