import styled from 'styled-components';

export const Height = styled.div.attrs((props) => ({}))`
  height: ${(props) => props.height || 'auto'};
  overflow: ${(props) => props.overflow || 'visible'};
`;

export const Width = styled.div.attrs((props) => ({
  width: props.width || 'auto',
}))`
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export const Card = styled.div.attrs((props) => ({
  height: props.height || 'auto',
}))`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '2rem'};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '0'};
  overflow: ${(props) => props.overflow || 'hidden'};
`;
