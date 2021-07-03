import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 0 24px;
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
      margin: 0 -8px;

      button {
        &:disabled {
          opacity: 0;
          visibility: hidden;
        }

        &.rec {
          color: ${props => props.theme.primary};
          background: ${props => shade(0.2, props.theme.background)};
          border: none;
          box-shadow: none;
        }

        &:hover {
          background: ${props => props.theme.container};
        }

        &.rec-dot_active {
          background: ${props => props.theme.container};
        }
      }

      li {
        margin: 8px;
        width: 100%;

        button {
          display: flex;
          width: 100%;
          margin: 0 auto;
          color: ${props => props.theme.container};
          background: ${props => props.theme.secondary};
          font-weight: bolder;
          text-transform: uppercase;
          letter-spacing: -1px;
          padding: 16px;
          border: none;
          font-size: 16px;
          transition: 0.3s ease all;
          border-radius: 8px;
          justify-content: center;

          &:hover {
            background: ${props => shade(0.1, props.theme.secondary)};
          }

          &.active {
            color: ${props => props.theme.primary};
            background: ${props => props.theme.container};
          }
        }

        /* &:last-child {
          button {
            border-radius: 0 8px 8px 0;
          }
        }
        &:first-child {
          button {
            border-radius: 8px 0 0 8px;
          }
        } */
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
      align-items: center;

      p {
        padding: 16px;
        text-align: center;

        &:first-child {
          padding-left: 24px;
          font-weight: bold;
          font-size: 900;
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

          &:first-child {
            padding-bottom: 0;
          }
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
