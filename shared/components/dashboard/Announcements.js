import { Card, ListGroup, Button } from 'react-bootstrap';
import Link from 'next/link';

const Announcements = ({ data }) => (
  <Card>
    <Card.Header>
      공지사항
      <Link href="/announcement" className="float-end">
        <Button size="sm" variant="link">전체 보기</Button>
      </Link>
    </Card.Header>
    <ListGroup variant="flush">
      {data.map((a) => (
        <ListGroup.Item key={a.id}>
          <div className="fw-bold">{a.title}</div>
          <small className="text-muted">{a.createdAt}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default Announcements; 