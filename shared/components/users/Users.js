import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import GridComponent from '../GridComponent';
import usersMockData from '@/shared/components/users/usersMockData';
import { InputWrapper } from '@/shared/layout-components/styles/input';
import SelectBox from '../SelectBox';
import useFetch from '@/shared/hooks/useFetch';
import { PrimaryButton, SecondaryButton } from '@/shared/layout-components/styles/button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSwal } from '@/shared/hooks/useSwal';

const LOGIN_TYPE_OPTIONS = [
  { value: '', label: '전체' },
  { value: 0, label: 'EARX APP' },
  { value: 1, label: '구글' },
  { value: 2, label: 'IOS' },
];
const DELETE_OPTIONS = [
  { value: '', label: '전체' },
  { value: 'true', label: '삭제' },
  { value: 'false', label: '미삭제' },
];

const Users = () => {
  const { getAction, removeAction } = useFetch();
  const swal = useSwal();

  // 실제 데이터 상태
  const [userData, setUserData] = useState([]);
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
  const [selectedRows, setSelectedRows] = useState([]);
  const router = useRouter();

  // API 호출 (마운트 시)
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getAction('/API/user?limit=10000');
      if (res && res.users) {
        console.log('API에서 받은 유저 수:', res.users.length);
        setUserData(res.users);
      }
    };
    fetchUsers();
  }, []);

  // 필터링된 데이터
  const filteredData = useMemo(() => {
    return userData.filter((row) => {
      // 이름
      if (filter.name && !(row.name || '').includes(filter.name)) return false;
      // 이메일
      if (filter.email && !(row.email || '').includes(filter.email)) return false;
      // 로그인타입
      if (filter.login_type !== '' && String(row.login_type ?? '') !== String(filter.login_type)) return false;
      // 삭제여부
      if (filter.is_deleted !== '' && String(row.is_deleted) !== filter.is_deleted) return false;
      return true;
    });
  }, [userData, filter]);

  useEffect(() => {
    console.log('API에서 받은 유저 수:', userData.length);
    console.log('현재 로그인타입 필터 값:', filter.login_type);
    console.log('필터링 후 유저 수:', filteredData.length);
    console.log('userData 중 login_type이 null인 개수:', userData.filter(u => u.login_type == null).length);
    console.log('filteredData 중 login_type이 null인 개수:', filteredData.filter(u => u.login_type == null).length);
  }, [userData, filter, filteredData]);

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

  // 수정 버튼 핸들러
  const handleEdit = () => {
    if (selectedRows.length === 0) return alert('수정할 사용자를 선택하세요.');
    if (selectedRows.length > 1) {
      swal.error('수정 불가', '수정은 한 명만 선택할 수 있습니다.');
      return;
    }
    alert('수정: ' + selectedRows.map(row => row.id).join(', '));
  };

  // 삭제 버튼 핸들러
  const handleDelete = async () => {
    if (selectedRows.length === 0) return alert('삭제할 사용자를 선택하세요.');

    // 확인 모달 (swal.confirm이 없으면 window.confirm 사용)
    let confirmResult = true;
    if (swal.confirm) {
      confirmResult = await swal.confirm('삭제 확인', '정말로 삭제하시겠습니까?');
    } else {
      confirmResult = window.confirm('정말로 삭제하시겠습니까?');
    }
    if (!confirmResult) return;

    for (const row of selectedRows) {
      const res = await removeAction(`/API/user/${row.id}`);
      if (res && res.detail && res.user_id) {
        if (swal.success) {
          swal.success('삭제 완료', '삭제가 정상적으로 이루어졌습니다');
        } else {
          alert('삭제가 정상적으로 이루어졌습니다');
        }
        setUserData(prev => prev.filter(user => user.id !== row.id));
      } else {
        if (swal.error) {
          swal.error('삭제 실패', '삭제가 실패했습니다');
        } else {
          alert('삭제가 실패했습니다');
        }
      }
    }
    setSelectedRows([]); // 선택 해제
  };

  // 수정/삭제 버튼 묶음
  const extraButton = (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: 8 }}>
      <PrimaryButton onClick={handleEdit} disabled={selectedRows.length === 0}>
        <FaEdit style={{ marginRight: 4 }} /> 수정
      </PrimaryButton>
      <SecondaryButton onClick={handleDelete} disabled={selectedRows.length === 0} bordered>
        <FaTrash style={{ marginRight: 4 }} /> 삭제
      </SecondaryButton>
    </div>
  );

  return (
    <Card overflow="visible">
      <style>{`.placeholder-option { color: #888 !important; }`}</style>
      {/* 필터 UI */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <InputWrapper
          name="name"
          placeholder="이름 검색"
          value={filter.name}
          onChange={handleFilterChange}
          style={{ width: '110px' }}
        />
        <InputWrapper
          name="email"
          placeholder="이메일 검색"
          value={filter.email}
          onChange={handleFilterChange}
          style={{ width: '180px' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ fontSize: 12, color: '#555', minWidth: 60 }}>로그인타입</div>
          <SelectBox
            name="login_type"
            value={LOGIN_TYPE_OPTIONS.find(opt => String(opt.value) === String(filter.login_type ?? ''))}
            options={LOGIN_TYPE_OPTIONS}
            onChange={opt => handleSelectChange('login_type', opt.value)}
            placeholder="로그인타입"
            styles={{ container: base => ({ ...base, width: 150 }) }}
            isSearchable={false}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ fontSize: 12, color: '#555', minWidth: 60 }}>삭제 여부</div>
          <SelectBox
            name="is_deleted"
            value={DELETE_OPTIONS.find(opt => String(opt.value) === String(filter.is_deleted))}
            options={DELETE_OPTIONS}
            onChange={opt => handleSelectChange('is_deleted', opt.value)}
            placeholder="삭제여부"
            styles={{ container: base => ({ ...base, width: 150 }) }}
            isSearchable={false}
          />
        </div>
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
        showCheckboxes={true}
        selection={true}
        setSelectionArray={setSelectedRows}
        noPagination={false}
        listLength={filteredData.length}
        onChangePerPage={setPageSize}
        changePageAction={(page, size) => setCurrentPage(page)}
        extraButton={extraButton}
      />
    </Card>
  );
};

export default Users;
