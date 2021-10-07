import { shade, transparentize } from 'polished';
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    margin-top: 1.5rem;

    .item {
      padding: 1.5rem 0;
      flex: 1;

      &:last-child {
        padding-right: 0;
      }

      iframe {
        width: 100%;
        min-height: 200px;
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

  .view-plus {
    display: flex;
    justify-content: center;
    margin-top: 32px;

    button {
      display: flex;
      align-items: center;
      color: ${props => transparentize(0.2, props.theme.primary)};
      background: ${props => props.theme.container};
      padding-right: 16px;
      padding-left: 10px;
      height: 40px;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      transition: 0.3s ease all !important;

      > svg {
        font-size: 20px;
        margin-right: 8px;
      }

      &:hover {
        background: ${props => shade(0.2, props.theme.container)};
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
      grid-template-columns: repeat(2, 1fr);
      .item {
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

    .user-feedback {
      grid-template-columns: repeat(1, 1fr);
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

  @media (max-width: 576px) {
  }
`;
