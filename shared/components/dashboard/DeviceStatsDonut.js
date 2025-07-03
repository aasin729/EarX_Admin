import { Card } from 'react-bootstrap';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const COLORS = [
  '#e3736d', //Android
  '#36A2EB', // iOS
  '#FFCE56', // 기타
];

const DeviceStatsDonut = ({ stats = [] }) => {
  const labels = stats.map((item) => item.platform);
  const data = stats.map((item) => item.user_count);
  const percentages = stats.map((item) => item.percentage);

  const series = data;
  const options = {
    chart: {
      type: 'donut',
    },
    labels,
    colors: COLORS.slice(0, stats.length),
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val, opts) => {
          const idx = opts.dataPointIndex;
          return `${data[idx]}명`;
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => `${val.toFixed(1)}%`,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
        },
      },
    },
  };

  return (
    <Card style={{ marginTop: 24 }}>
      <Card.Body style={{ padding: '8px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 100 }}>
          <div style={{ width: 180 }}>
            <ReactApexChart options={options} series={series} type="donut" height={200} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 8 }}>기기별 사용자 비율</div>
            {stats.map((item, idx) => (
              <div key={item.platform} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 6, background: COLORS[idx], marginRight: 4 }} />
                <span style={{ fontWeight: 500 }}>{item.platform}:</span>
                <span>{item.user_count}명</span>
                <span style={{ color: '#888', fontSize: 13 }}>({item.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeviceStatsDonut; 