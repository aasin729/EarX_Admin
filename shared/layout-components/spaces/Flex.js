import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || ''};
  align-items: ${(props) => props.align || 'center'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  min-height: ${(props) => props.minHeight || 'auto'};
`;
