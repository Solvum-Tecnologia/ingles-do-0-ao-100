import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  margin: 0 auto;
  border-radius: 8px;
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
    background: ${props => shade(0.2, props.theme.secondary)};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
