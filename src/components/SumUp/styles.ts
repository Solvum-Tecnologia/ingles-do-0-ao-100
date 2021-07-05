import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  margin: 0 24px;
  padding: 64px 0;
  padding-bottom: 64px;
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
    flex: 50%;
    padding-bottom: 40;

    .item {
      display: flex;
      flex: 50%;
      align-items: center;
      margin-top: 24px;

      img {
        width: 30px;
        margin-right: 16px;
      }

      .title {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
          color: ${props => props.theme.primary};
          text-decoration: line-through;
        }
      }
    }
  }

  .mobile {
    max-width: 50%;
    flex: 50%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .value-total {
    flex: 100%;
    display: flex;
    margin: 64px 0;
    flex-wrap: wrap;

    h3 {
      flex: 50%;
      text-align: center;
      font-size: 32px;
      background: ${props => shade(0.3, props.theme.background)};
      margin-top: 24px;
      padding: 32px 0;
      font-weight: 900;

      span {
        text-decoration: line-through;
      }
    }

    > div {
      flex: 50%;
      h3 {
        background: none;
      }
    }
  }

  .promotion {
    margin-top: 24px;
    flex: 100%;

    h3 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 8px;

      &.installment {
        font-size: 32px;
        text-transform: none;
        font-weight: 900;
      }

      span {
        font-size: 62px;
      }
    }
  }

  @media (max-width: 992px) {
    .mobile {
      display: none;
    }

    .value-total {
      h3 {
        flex: 100%;
      }
    }
  }
`;
