import styled from 'styled-components';

export const VerticalLine = styled.div`
  width: ${(props) => props.width || '1px'};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color || '#e5e5e5'};
`;

export const HorizontalLine = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '1px'};
  background-color: ${(props) => props.color || '#e5e5e5'};
`;
