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
    margin-bottom: 64px;

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

  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 16px;
    }
  }
`;
