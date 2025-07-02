import { Card, Row, Col } from 'react-bootstrap';
import { FaUserShield, FaUsers, FaMobileAlt, FaRunning } from 'react-icons/fa';

const StatCards = ({ stats }) => {
  const items = [
    { icon: <FaUserShield size={28} />, label: '관리자', value: stats.admins },
    { icon: <FaUsers size={28} />, label: '사용자', value: stats.users },
    { icon: <FaMobileAlt size={28} />, label: '디바이스', value: stats.devices },
    { icon: <FaRunning size={28} />, label: '달리기 기록', value: stats.runs },
  ];
  return (
    <Row>
      {items.map((item, idx) => (
        <Col key={item.label} md={3} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <div className="mb-2">{item.icon}</div>
              <Card.Title>{item.label}</Card.Title>
              <h3>{item.value}</h3>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatCards; 