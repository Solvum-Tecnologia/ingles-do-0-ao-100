import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.container};
  margin-top: 40px;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1136px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  margin: 0 24px;

  iframe {
    width: 400px;
    height: 250px;
    border-radius: 8px;
  }

  .questions {
    flex: 1;
    margin-left: 24px;

    .item {
      display: flex;
      background: ${props => props.theme.primary};
      margin: 16px 0;
      align-items: center;
      transition: 0.3s ease all;
      border-radius: 8px;

      h2,
      p {
        color: ${props => props.theme.container};
        padding-left: 16px;
      }

      h2 {
        padding-top: 16px;
        padding-bottom: 16px;
      }

      p {
        visibility: hidden;
        height: 0;
      }

      button {
        background: none;
        border: none;
        padding: 8px 16px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.active {
        h2 {
          padding-bottom: 0;
        }
        p {
          visibility: visible;
          height: auto;
          padding-top: 16px;
          padding-bottom: 16px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    iframe {
      width: 100%;
      max-width: 500px;
    }

    .questions {
      flex: 100%;
      margin: 0;
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;
