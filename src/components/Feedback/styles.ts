import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1136px;
  margin: 0 24px;
  margin-top: 80px;

  h2 {
    font-size: 32px;
    text-align: center;
  }

  .user-feedback {
    display: flex;
    flex-wrap: wrap;

    .item {
      padding: 24px 0;
      padding-right: 24px;
      flex: 1;

      &:last-child {
        padding-right: 0;
      }

      iframe {
        width: 100%;
        height: 300px;
        border-radius: 8px;
      }

      h3 {
        font-weight: 900;
        margin-top: 16px;
        font-size: 24px;
      }

      p {
        margin-top: 8px;
      }
    }
  }

  @media (max-width: 1200px) {
    .user-feedback {
      .item {
        iframe {
          height: 250px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .user-feedback {
      .item {
        flex: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 0;
        text-align: center;

        iframe,
        p,
        h3 {
          max-width: 500px;
        }
      }
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;
