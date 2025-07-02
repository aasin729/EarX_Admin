import { Card, Table } from 'react-bootstrap';

const RecentActivity = ({ users, devices, runs }) => (
  <>
    <Card className="mb-3">
      <Card.Header>최근 등록된 사용자</Card.Header>
      <Table size="sm" hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
    <Card className="mb-3">
      <Card.Header>최근 등록된 디바이스</Card.Header>
      <Table size="sm" hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>기기 타입</th>
            <th>기기 주소</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.type}</td>
              <td>{d.address}</td>
              <td>{d.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
    <Card>
      <Card.Header>최근 달리기 기록</Card.Header>
      <Table size="sm" hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>사용자</th>
            <th>거리(km)</th>
            <th>완료 시간</th>
          </tr>
        </thead>
        <tbody>
          {runs.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.user}</td>
              <td>{r.distance}</td>
              <td>{r.finishedAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  </>
);

export default RecentActivity; 