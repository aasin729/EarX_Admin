import { Card, ListGroup } from 'react-bootstrap';

const Alerts = ({ data }) => (
  <Card>
    <Card.Header>시스템 알림/이슈</Card.Header>
    <ListGroup variant="flush">
      {data.map((alert) => (
        <ListGroup.Item key={alert.id}>
          <span>{alert.message}</span>
          <span className="float-end text-muted" style={{ fontSize: '0.9em' }}>{alert.date}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default Alerts; 