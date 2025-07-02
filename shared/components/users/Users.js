import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import GridComponent from '../GridComponent';
import usersMockData from '@/shared/components/users/usersMockData';

const LOGIN_TYPE_OPTIONS = [
  { value: '', label: '로그인타입' },
  { value: 0, label: 'EARX APP' },
  { value: 1, label: '구글' },
  { value: 2, label: 'IOS' },
];
const DELETE_OPTIONS = [
  { value: '', label: '삭제여부' },
  { value: 'true', label: '삭제' },
  { value: 'false', label: '미삭제' },
];

const Users = () => {
  // Mock user data
  const initData = [
    { id: 1, login_type: 1, name: '홍길동', email: 'test@test.com', created_at: '2024-01-01T10:00:00', is_deleted: true, deleted_at: '2025-03-06T22:46:37' },
    { id: 2, login_type: 2, name: '김철수', email: 'test2@test.com', created_at: '2024-01-02T11:00:00', is_deleted: false, deleted_at: null },
    { id: 3, login_type: 0, name: '이영희', email: 'lee@test.com', created_at: '2024-01-03T12:00:00', is_deleted: false, deleted_at: null },
    { id: 4, login_type: 1, name: '박민수', email: 'park@test.com', created_at: '2024-01-04T13:00:00', is_deleted: true, deleted_at: '2024-05-10T09:30:00' },
    { id: 5, login_type: 2, name: '최지우', email: 'choi@test.com', created_at: '2024-01-05T14:00:00', is_deleted: false, deleted_at: null },
    { id: 6, login_type: 0, name: '정해인', email: 'jung@test.com', created_at: '2024-01-06T15:00:00', is_deleted: false, deleted_at: null },
    { id: 7, login_type: 1, name: '한가인', email: 'han@test.com', created_at: '2024-01-07T16:00:00', is_deleted: true, deleted_at: '2024-06-01T08:00:00' },
    { id: 8, login_type: 2, name: '서강준', email: 'seo@test.com', created_at: '2024-01-08T17:00:00', is_deleted: false, deleted_at: null },
    { id: 9, login_type: 1, name: null, email: 'sidversion9@gmail.com', created_at: '2024-01-09T18:00:00', is_deleted: false, deleted_at: null },
    { id: 10, login_type: 0, name: '오나미', email: 'oh@test.com', created_at: '2024-01-10T19:00:00', is_deleted: false, deleted_at: null },
    { id: 11, login_type: 2, name: '유재석', email: 'yoo@test.com', created_at: '2024-01-11T20:00:00', is_deleted: true, deleted_at: '2024-07-15T10:10:00' },
    { id: 12, login_type: 1, name: '강호동', email: 'kang@test.com', created_at: '2024-01-12T21:00:00', is_deleted: false, deleted_at: null },
    { id: 13, login_type: 0, name: '신동엽', email: 'shin@test.com', created_at: '2024-01-13T22:00:00', is_deleted: false, deleted_at: null },
    { id: 14, login_type: 2, name: '이수근', email: 'lee2@test.com', created_at: '2024-01-14T23:00:00', is_deleted: true, deleted_at: '2024-08-20T11:20:00' },
    { id: 15, login_type: 1, name: '박나래', email: 'park2@test.com', created_at: '2024-01-15T09:00:00', is_deleted: false, deleted_at: null },
    { id: 16, login_type: 0, name: '장도연', email: 'jang@test.com', created_at: '2024-01-16T08:00:00', is_deleted: false, deleted_at: null },
    { id: 17, login_type: 2, name: '김종국', email: 'kim@test.com', created_at: '2024-01-17T07:00:00', is_deleted: true, deleted_at: '2024-09-25T12:30:00' },
    { id: 18, login_type: 1, name: '하하', email: 'haha@test.com', created_at: '2024-01-18T06:00:00', is_deleted: false, deleted_at: null },
    { id: 19, login_type: 0, name: '송은이', email: 'song@test.com', created_at: '2024-01-19T05:00:00', is_deleted: false, deleted_at: null },
    { id: 20, login_type: 2, name: '김숙', email: 'kimsook@test.com', created_at: '2024-01-20T04:00:00', is_deleted: true, deleted_at: '2024-10-30T13:40:00' },
  ];

  // 필터 상태
  const [filter, setFilter] = useState({
    name: '',
    email: '',
    login_type: '',
    is_deleted: '',
  });
  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [clearSelection, setClearSelection] = useState(false);
  const router = useRouter();

  // 필터링된 데이터
  const filteredData = useMemo(() => {
    return initData.filter((row) => {
      // 이름
      if (filter.name && !(row.name || '').includes(filter.name)) return false;
      // 이메일
      if (filter.email && !(row.email || '').includes(filter.email)) return false;
      // 로그인타입
      if (filter.login_type !== '' && String(row.login_type) !== String(filter.login_type)) return false;
      // 삭제여부
      if (filter.is_deleted !== '' && String(row.is_deleted) !== filter.is_deleted) return false;
      return true;
    });
  }, [initData, filter]);

  // 페이징된 데이터
  const pagedData = useMemo(() => {
    const start = currentPage * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  // 전체 페이지 수
  const totalPage = Math.ceil(filteredData.length / pageSize);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: 'login_type',
      headerName: '로그인 타입',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => {
        switch (params.value) {
          case 0:
            return 'EARX APP';
          case 1:
            return '구글';
          case 2:
            return 'IOS';
          default:
            return '-';
        }
      },
    },
    {
      field: 'name',
      headerName: '이름',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'email',
      headerName: '이메일',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'created_at',
      headerName: '생성 일시',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'is_deleted',
      headerName: '삭제 여부',
      cellStyle: { textAlign: 'center' },
      valueFormatter: undefined,
      cellRenderer: (params) =>
        params.value === true
          ? '삭제'
          : params.value === false
          ? '미삭제'
          : '-',
    },
    {
      field: 'deleted_at',
      headerName: '삭제 일시',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => {
        if (!params.value) return '-';
        const date = new Date(params.value);
        if (isNaN(date)) return params.value;
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const mi = String(date.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
      },
    },
  ];

  const viewUserDetail = (rowData) => {
    router.push(`/users/detail/${rowData.id}`);
  };

  // 필터 입력 변경 핸들러
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(0); // 필터 변경 시 첫 페이지로
  };

  // 셀렉트박스 변경 핸들러
  const handleSelectChange = (name, value) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card overflow="visible">
      <style>{`.placeholder-option { color: #888 !important; }`}</style>
      {/* 필터 UI */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          name="name"
          placeholder="이름 검색"
          value={filter.name}
          onChange={handleFilterChange}
          style={{ width: 120 }}
        />
        <input
          name="email"
          placeholder="이메일 검색"
          value={filter.email}
          onChange={handleFilterChange}
          style={{ width: 180 }}
        />
        <select
          name="login_type"
          value={filter.login_type}
          onChange={handleFilterChange}
          style={{ width: 100 }}
        >
          {LOGIN_TYPE_OPTIONS.map((opt, idx) => (
            <option key={opt.value} value={opt.value} className={idx === 0 ? 'placeholder-option' : ''}>{opt.label}</option>
          ))}
        </select>
        <select
          name="is_deleted"
          value={filter.is_deleted}
          onChange={handleFilterChange}
          style={{ width: 100 }}
        >
          {DELETE_OPTIONS.map((opt, idx) => (
            <option key={opt.value} value={opt.value} className={idx === 0 ? 'placeholder-option' : ''}>{opt.label}</option>
          ))}
        </select>
      </div>
      {/* 합계 표시 */}
      <div style={{ marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
        합계 : {filteredData.length}명
      </div>
      <GridComponent
        data={pagedData}
        setData={() => {}}
        columns={columns}
        onRowClicked={viewUserDetail}
        fitRowWidth
        clearSelection={clearSelection}
        onClearSelection={() => setClearSelection(false)}
        showCheckboxes={false}
        noPagination={false}
        listLength={filteredData.length}
        onChangePerPage={setPageSize}
        changePageAction={(page, size) => setCurrentPage(page)}
      />
    </Card>
  );
};

export default Users;
