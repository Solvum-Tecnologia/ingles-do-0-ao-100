import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  margin: 0 24px;
  margin-top: 40px;
  flex: 1;
  max-width: 1136px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    font-size: 32px;
    flex: 100%;
    color: ${props => props.theme.secondary};
  }

  .topics {
    flex: 1;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      img {
        width: 50px;
      }

      h3 {
        margin-left: 16px;
      }
    }
  }

  .mobile {
    max-width: 500px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .purchase {
    flex: 100%;
    margin-top: 40px;
  }
`;
