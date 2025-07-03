import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import GridComponent from '../GridComponent';
import usersMockData from '@/shared/components/users/usersMockData';
import deviceMockData from '@/shared/components/device/deviceMockData';


const Device = () => {
  // API에서 디바이스 데이터 가져오기
  // const { getAction } = useFetch();
  const [deviceData, setDeviceData] = useState(deviceMockData);
  const [loading, setLoading] = useState(false);
  const [serialFilter, setSerialFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [clearSelection, setClearSelection] = useState(false);
  const router = useRouter();

  // user_id로 사용자 정보 매핑
  const userMap = useMemo(() => {
    const map = {};
    usersMockData.forEach(user => {
      map[user.id] = user;
    });
    return map;
  }, []);

  // 디바이스 + 사용자 정보 합치기
  const mergedData = useMemo(() => {
    return deviceData.map((device, idx) => ({
      id: device.id || idx + 1,
      user_id: device.user_id,
      windows: device.windows,
      android: device.android,
      web: device.web,
      ios: device.ios,
      macos: device.macos,
      updated_at: device.updated_at,
      created_at: device.created_at,
    }));
  }, [deviceData]);

  // 시리얼번호 필터링
  const filteredData = useMemo(() => {
    if (!serialFilter) return mergedData;
    return mergedData.filter(row => {
      const serials = [row.android, row.ios, row.macos];
      return serials.some(serial => (serial || '').toLowerCase().includes(serialFilter.toLowerCase()));
    });
  }, [mergedData, serialFilter]);

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
      field: 'windows',
      headerName: 'Windows',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'android',
      headerName: 'Android',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'web',
      headerName: 'Web',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'ios',
      headerName: 'iOS',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'macos',
      headerName: 'macOS',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'updated_at',
      headerName: '업데이트 일시',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
    {
      field: 'created_at',
      headerName: '생성 일시',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => params.value || '-',
    },
  ];

  const viewUserDetail = (rowData) => {
    if (rowData.user_id) {
      router.push(`/users/detail/${rowData.user_id}?from=device`);
    }
  };

  // 시리얼번호 검색 입력 핸들러
  const handleSerialFilterChange = (e) => {
    setSerialFilter(e.target.value);
    setCurrentPage(0); // 검색 시 첫 페이지로
  };

  return (
    <Card overflow="visible">
      <div style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 16 }}>디바이스 목록</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          name="serial"
          placeholder="Mac Addr 검색 (예:F8:EE:DD:CC:BB:AA)"
          value={serialFilter}
          onChange={handleSerialFilterChange}
          style={{ width: 300, height: 40 }}
        />
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

export default Device;
export { deviceMockData };
