import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1136px;

  display: flex;
  flex-wrap: wrap;
  margin: 0 16px;
  margin-top: 80px;

  .profile {
    max-width: 400px;
    position: relative;
    flex: 30%;

    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }

    .bg {
      background: ${props => props.theme.secondary};
      width: 100%;
      height: 100%;
      position: absolute;
      top: 8px;
      left: 8px;
    }
  }

  .text {
    padding: 24px 0;
    padding-left: 40px;
    flex: 70%;

    h2 {
      color: ${props => props.theme.secondary};
      margin-top: 4px;
    }

    .border {
      width: 90px;
      height: 4px;
      border-radius: 8px;
      background: ${props => props.theme.primary};
      margin: 24px 0;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;
    .text {
      flex: 100%;
      margin-top: 32px;
      padding: 0;
      text-align: center;

      .border {
        margin: 24px auto;
      }
    }
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;
