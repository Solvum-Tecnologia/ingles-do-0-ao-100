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
  padding: 6rem 0;

  .benefit {
    max-width: 1136px;
    margin: 0 16px;

    h2 {
      text-align: center;
      font-size: 2rem;
    }

    .items {
      display: flex;
      flex-wrap: wrap;

      .item {
        flex: 50%;
        padding: 24px 16px;
        display: flex;

        span {
          margin-right: 0.5rem;
          font-size: 1.5rem;
          margin-top: 0.2rem;
          color: ${props => props.theme.secondary};
        }
      }
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
