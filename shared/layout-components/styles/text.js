import styled from 'styled-components';

const defaultTextSize = '0.85rem';

export const BoldText = styled.span`
  font-weight: ${(props) => props.weight || 'bold'};
  font-size: ${(props) => props.size || defaultTextSize};
`;
