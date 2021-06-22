import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 0 16px;
  margin-top: 80px;
  flex: 1;
  max-width: 1136px;

  h2 {
    text-align: center;
    font-size: 32px;
  }

  .menu {
    margin-top: 24px;

    ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      justify-content: center;

      li {
        button {
          display: flex;
          margin: 0 auto;
          color: ${props => props.theme.container};
          background: ${props => props.theme.secondary};
          font-weight: bolder;
          text-transform: uppercase;
          letter-spacing: -1px;
          padding: 16px;
          border: none;
          font-size: 24px;
          transition: 0.3s ease all;

          &:hover {
            background: ${props => shade(0.1, props.theme.secondary)};
          }

          &.active {
            color: ${props => props.theme.primary};
            background: ${props => props.theme.container};
          }
        }

        &:last-child {
          button {
            border-radius: 0 8px 8px 0;
          }
        }
        &:first-child {
          button {
            border-radius: 8px 0 0 8px;
          }
        }
      }
    }
  }

  .items {
    .item {
      display: flex;
      margin-top: 24px;
      background: ${props => props.theme.container};
      flex-wrap: wrap;
      padding: 8px 0;
      border-radius: 8px;

      p {
        padding: 16px;
        flex: 70%;
        text-align: center;

        &:last-child,
        &:first-child {
          flex: 15%;
          display: block;
        }
      }

      &:nth-child(2n) {
        background: ${props => props.theme.secondary};

        p {
          color: ${props => props.theme.container};
        }
      }
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    .items {
      .item {
        p {
          flex: 100%;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .menu {
      ul {
        li {
          button {
            margin: 4px;
            border-radius: 8px !important;
          }
        }
      }
    }
  }
`;
