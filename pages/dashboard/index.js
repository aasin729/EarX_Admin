import StatCards from '@/shared/components/dashboard/StatCards';
import RecentActivity from '@/shared/components/dashboard/RecentActivity';
import Announcements from '@/shared/components/dashboard/Announcements';
import Alerts from '@/shared/components/dashboard/Alerts';
import Charts from '@/shared/components/dashboard/Charts';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { Row, Col } from 'react-bootstrap';

const mockData = {
  stats: {
    admins: 3,
    users: 1200,
    devices: 800,
    runs: 5000,
  },
  recentUsers: [
    { id: 1, name: '홍길동', email: 'hong@test.com', createdAt: '2024-05-01' },
    { id: 2, name: '김철수', email: 'kim@test.com', createdAt: '2024-05-02' },
  ],
  recentDevices: [
    { id: 1, type: '워치', address: '00:11:22:33:44:55', createdAt: '2024-05-01' },
    { id: 2, type: '밴드', address: '66:77:88:99:AA:BB', createdAt: '2024-05-02' },
  ],
  recentRuns: [
    { id: 1, user: '홍길동', distance: 5.2, finishedAt: '2024-05-01 07:30' },
    { id: 2, user: '김철수', distance: 10.1, finishedAt: '2024-05-02 06:50' },
  ],
  announcements: [
    { id: 1, title: '2024년 5월 시스템 점검 안내', createdAt: '2024-05-01' },
    { id: 2, title: '신규 기능 업데이트 안내', createdAt: '2024-04-28' },
  ],
  alerts: [
    { id: 1, message: '3명의 사용자가 삭제됨', date: '2024-05-01' },
    { id: 2, message: '1개의 디바이스가 등록됨', date: '2024-05-02' },
  ],
  chartData: {
    users: [1000, 1100, 1150, 1200],
    devices: [700, 750, 780, 800],
    runs: [4000, 4500, 4800, 5000],
    labels: ['2주전', '1주전', '이번주', '현재'],
  },
};

const Dashboard = () => {
  return (
    <Container>
      <ContentWrapper>
        <h1 className="fw-bold">대시보드</h1>
        <StatCards stats={mockData.stats} />
        <Row className="mt-4" style={{ minHeight: '600px' }}>
          <Col md={8} style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
            <div style={{ flex: 1 }}>
              <RecentActivity users={mockData.recentUsers} devices={mockData.recentDevices} runs={mockData.recentRuns} />
            </div>
          </Col>
          <Col md={4} style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
            <div style={{ flex: 1, minHeight: 0 }}>
              <Alerts data={mockData.alerts} />
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <Charts data={mockData.chartData} />
            </div>
          </Col>
        </Row>
      </ContentWrapper>
    </Container>
  );
};

Dashboard.layout = 'Contentlayout';
export default Dashboard;
