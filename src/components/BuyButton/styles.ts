import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;
  color: ${props => props.theme.container};
  background: ${props => props.theme.secondary};
  font-weight: bolder;
  text-transform: uppercase;
  padding: 16px 24px;
  border: none;
  font-size: 24px;
  transition: 0.3s ease all;
  align-items: center;

  span {
    font-size: 16px;
    margin-top: 4px;
    font-weight: 300;
    font-style: italic;
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.secondary)};
  }

  @media (max-width: 576px) {
    font-size: 18px;
    letter-spacing: -1px;

    span {
      font-size: 14px;
    }
  }
`;
