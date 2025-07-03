import { Card, Row, Col } from 'react-bootstrap';
import { FaUserShield, FaUsers, FaMobileAlt, FaRunning, FaDatabase, FaUserPlus, FaCalendarDay, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

const StatCards = ({ stats }) => {
  const items = [
    { icon: <FaUsers size={28} />, label: '전체 사용자', value: stats.totalUsers + '명', },
    { icon: <FaUserShield size={28} />, label: '전체 관리자', value: stats.totalAdmins + '명'  },
    { icon: <FaRunning size={28} />, label: '전체 러닝 기록', value: stats.totalRunningRecords + 'km' },
    { icon: <FaMobileAlt size={28} />, label: '전체 디바이스', value: stats.totalDevices + '대' },
    { icon: <FaDatabase size={28} />, label: '전체 센서 데이터', value: stats.totalSensorData + '건' },
    { icon: <FaUserPlus size={28} />, label: '오늘 신규 사용자', value: stats.todayNewUsers + '명' },
    { icon: <FaCalendarDay size={28} />, label: '이번 달 신규 사용자', value: stats.thisMonthNewUsers + '명' },
    { icon: <FaChartLine size={28} />, label: '오늘 러닝 기록', value: stats.todayRunningRecords + 'km' },
    { icon: <FaCalendarAlt size={28} />, label: '이번 달 러닝 기록', value: stats.thisMonthRunningRecords + 'km'  },
  ];
  return (
    <Row className="g-3">
      {items.map((item, idx) => (
        <Col key={item.label} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100" style={{ minHeight: 110 }}>
            <Card.Body style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: '12px 6px',
              gap: 4,
            }}>
              <div className="mb-1">{item.icon}</div>
              <Card.Title style={{ fontSize: 15, marginBottom: 2 }}>{item.label}</Card.Title>
              <h4 style={{ color: '#007bff', fontWeight: 'bold', marginTop: 4, fontSize: 18 }}>{item.value}</h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatCards; 