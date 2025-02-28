import styled from 'styled-components';
import { COLORS } from '../styles/colors';

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || 'column'};
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || COLORS.lightgray};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.border || COLORS.lightgray};
`;
