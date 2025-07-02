import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: '사용자',
        data: data.users,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: '디바이스',
        data: data.devices,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: '달리기 기록',
        data: data.runs,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  return (
    <Card>
      <Card.Header>통계 차트</Card.Header>
      <Card.Body>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} height={220} />
      </Card.Body>
    </Card>
  );
};

export default Charts; 