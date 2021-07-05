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
  padding: 64px 0;
  margin: 0 24px;

  .title {
    /* width: 400px; */
    border-radius: 8px;
    text-align: center;
  }

  .questions {
    flex: 1;
    margin-top: 16px;
    /* margin-left: 24px; */

    .item {
      display: flex;
      background: ${props => props.theme.primary};
      margin: 16px 0;
      align-items: center;
      transition: 0.3s ease all;
      border-radius: 8px;
      cursor: pointer;

      > div {
        flex: 1;
        h3,
        p {
          color: ${props => props.theme.container};
          padding-left: 16px;
          text-align: initial;
        }

        h3 {
          padding-top: 16px;
          padding-bottom: 16px;
          font-weight: 900;
        }

        p {
          visibility: hidden;
          opacity: 0;
          height: 0;
          transition: 0.3s ease all;
        }
      }

      span {
        background: none;
        border: none;
        padding: 8px 16px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.active {
        > div {
          h3 {
            padding-bottom: 0;
          }
          p {
            visibility: visible;
            opacity: 1;
            height: auto;
            padding-top: 16px;
            padding-bottom: 16px;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    .questions {
      flex: 100%;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;
