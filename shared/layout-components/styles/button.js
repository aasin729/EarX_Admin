import { Badge, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const DefaultButton = ({ onClick, children, w100, h100, ...props }) => {
  return (
    <Button
      className={`p-0 w-auto ${w100 ? 'w-100' : ''} ${h100 ? 'h-100' : ''}`}
      variant=""
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export const PrimaryButton = ({
  onClick,
  children,
  className,
  bordered,
  type,
  ...props
}) => {
  return (
    <Button
      className={className}
      variant={`${bordered ? 'outline-' : ''}primary`}
      onClick={onClick}
      type={type ?? 'button'}
      {...props}
    >
      {children}
    </Button>
  );
};

export const SecondaryButton = ({
  onClick,
  children,
  className,
  bordered,
  ...props
}) => {
  return (
    <Button
      className={className}
      variant={`${bordered ? 'outline-' : ''}secondary`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export const PrimaryBadgeButton = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <Badge
      className={`pointer ${className ?? ''}`}
      bg={'primary'}
      onClick={onClick}
      {...props}
    >
      {children}
    </Badge>
  );
};

export const SecondaryBadgeButton = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <Badge
      className={`pointer ${className ?? ''}`}
      bg={'dark'}
      onClick={onClick}
      {...props}
    >
      {children}
    </Badge>
  );
};
