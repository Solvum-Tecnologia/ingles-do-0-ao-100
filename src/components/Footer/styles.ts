import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: ${props => shade(0.5, props.theme.background)};
`;

export const Content = styled.div`
  margin: 0 24px;
  flex: 1;
  max-width: 1136px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .col-1,
  .col-2,
  .col-3 {
    padding: 40px 0;
    display: flex;
    justify-content: center;

    > div,
    > a {
      max-width: 250px;
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    .col-3 {
      flex: 100%;
      justify-content: center;
      max-width: 100%;

      a {
        display: flex;
        max-width: 250px;
      }
    }
  }

  @media (max-width: 768px) {
    .col-1,
    .col-2 {
      flex: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
  }
`;
