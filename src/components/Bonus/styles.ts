import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  max-width: 1136px;
  margin-top: 8rem;

  .title {
    h2 {
      text-align: center;
      font-size: 2rem;
      padding: 0 1.5rem;
    }
  }

  .items {
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;

    .item {
      flex: 1;
      flex-basis: 200px;
      margin: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: ${props => props.theme.secondary};
        font-size: 2rem;
      }

      h3 {
        text-align: center;
        font-size: 1rem;
      }

      span {
        font-size: 3rem;
        color: ${props => props.theme.primary};
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
