import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.container};
  margin-top: 6rem;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1136px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  margin: 0 1.5rem;

  .title {
    /* width: 400px; */
    border-radius: 8px;
    text-align: center;
  }

  .questions {
    flex: 1;
    margin-top: 1rem;
    /* margin-left: 24px; */

    .item {
      display: flex;
      background: ${props => props.theme.primary};
      margin: 1rem 0;
      align-items: center;
      transition: 0.3s ease all;
      border-radius: 8px;
      cursor: pointer;

      > div {
        flex: 1;
        h3,
        p {
          color: ${props => props.theme.container};
          padding-left: 1rem;
          text-align: initial;
        }

        h3 {
          padding-top: 1rem;
          padding-bottom: 1rem;
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
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
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
            padding-top: 1rem;
            padding-bottom: 1rem;
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
    .title {
      h2 {
        text-align: justify;
      }
    }
  }

  @media (max-width: 576px) {
  }
`;
