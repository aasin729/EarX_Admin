import { useEffect, useState } from 'react';
import StatCards from '@/shared/components/dashboard/StatCards';
import RecentActivity from '@/shared/components/dashboard/RecentActivity';
import Announcements from '@/shared/components/dashboard/Announcements';
import Alerts from '@/shared/components/dashboard/Alerts';
import Charts from '@/shared/components/dashboard/Charts';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { Row, Col } from 'react-bootstrap';
import useFetch from '@/shared/hooks/useFetch';
import DeviceStatsDonut from '@/shared/components/dashboard/DeviceStatsDonut';

const Dashboard = () => {
  const { getAction } = useFetch();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalRunningRecords: 0,
    totalDevices: 0,
    totalSensorData: 0,
    todayNewUsers: 0,
    thisMonthNewUsers: 0,
    todayRunningRecords: 0,
    thisMonthRunningRecords: 0,
  });
  const [deviceStats, setDeviceStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getAction('/API/dashboard/stats');
      if (data) {
        setStats({
          totalUsers: data.total_users,
          totalAdmins: data.total_admins,
          totalRunningRecords: data.total_running_records,
          totalDevices: data.total_devices,
          totalSensorData: data.total_sensor_data,
          todayNewUsers: data.today_new_users,
          thisMonthNewUsers: data.this_month_new_users,
          todayRunningRecords: data.today_running_records,
          thisMonthRunningRecords: data.this_month_running_records,
        });
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchDeviceStats = async () => {
      const data = await getAction('/API/dashboard/device-stats');
      if (data) setDeviceStats(data);
    };
    fetchDeviceStats();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        {/* <h1 className="fw-bold">대시보드</h1> */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ flex: 4 }}>
            <StatCards stats={stats} />
            <DeviceStatsDonut stats={deviceStats} />
          </div>
          <div style={{ flex: 6 }}>
            <RecentActivity users={[]} devices={[]} runs={[]} />
          </div>
        </div>
        {/* 필요하다면 아래에 다른 Row/Col 추가 */}
      </ContentWrapper>
    </Container>
  );
};

Dashboard.layout = 'Contentlayout';
export default Dashboard;
