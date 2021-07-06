import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1136px;
  margin: 0 1.5rem;
  margin-top: 6rem;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  .user-feedback {
    display: flex;
    flex-wrap: wrap;

    .item {
      padding: 1.5rem 0;
      padding-right: 1.5rem;
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
        margin-top: 1rem;
        font-size: 1.5rem;
      }

      p {
        margin-top: 0.5rem;
        color: ${props => transparentize(0.2, props.theme.primary)};
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
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 576px) {
  }
`;
