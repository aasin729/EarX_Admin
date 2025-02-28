import { Button } from 'react-bootstrap';

export const CustomTab = ({ onClick, children, id, tab }) => {
  return (
    <Button
      className={`custom-tab ${id === tab ? 'tab-active fw-bold' : ''}`}
      variant=""
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};
