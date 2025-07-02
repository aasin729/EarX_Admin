import { Card, Height } from '@/shared/layout-components/spaces/SpacesComponenet';
import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { BoldText } from '@/shared/layout-components/styles/text';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import GridComponent from '../GridComponent';
import { useState, useEffect } from 'react';
import Modal from '../Modal';

const initialAdmins = [
  {
    id: 1,
    email: 'admin@earx.com',
    name: '최고관리자',
    created_at: '2025-05-08T01:08:27',
  },
  {
    id: 2,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 3,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 4,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 5,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 6,
    email: 'admin@earx.com',
    name: '최고관리자',
    created_at: '2025-05-08T01:08:27',
  },
  {
    id: 7,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 8,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 9,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 10,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 11,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 12,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 13,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 14,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 15,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
  {
    id: 16,
    email: 'tkdghks629@naver.com',
    name: '김상환',
    created_at: '2025-07-01T11:59:03',
  },
];

const AdminList = () => {
  const [admins, setAdmins] = useState(initialAdmins);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [selectedAdmins, setSelectedAdmins] = useState([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [clearSelection, setClearSelection] = useState(false);

  const pagedAdmins = admins.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const columns = [
    {
      headerName: 'NO',
      field: 'no',
      minWidth: 60,
      flex: 0.5,
      valueGetter: (params) =>
        params.node
          ? currentPage * pageSize + params.node.rowIndex + 1
          : '',
      sortable: false,
      cellStyle: { textAlign: 'center' },
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: '이름',
      field: 'name',
      minWidth: 120,
      flex: 1,
      sortable: true,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '이메일',
      field: 'email',
      minWidth: 200,
      flex: 2,
      sortable: true,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '생성 일시',
      field: 'created_at',
      minWidth: 170,
      flex: 1.2,
      sortable: true,
      valueGetter: (params) => {
        const d = new Date(params.data.created_at);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
      },
      cellStyle: { textAlign: 'center' },
    },
  ];

  const handleSelectionChange = (selected) => {
    setSelectedAdmins(selected);
  };

  const openPasswordModal = () => {
    if (selectedAdmins.length !== 1) {
      alert('비밀번호 변경은 한 명의 관리자만 선택해야 합니다.');
      return;
    }
    setShowPasswordModal(true);
  };
  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setNewPassword('');
  };
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    alert(`비밀번호가 변경되었습니다. (${selectedAdmins.map(a => a.name).join(', ')})`);
    closePasswordModal();
    setClearSelection(true);
  };

  const handleDeleteRestore = () => {
    if (window.confirm(`선택한 관리자(${selectedAdmins.map(a => a.name).join(', ')})를 삭제/복구 하시겠습니까?`)) {
      alert('삭제/복구가 완료되었습니다.');
      setClearSelection(true);
    }
  };

  return (
    <Card overflow="visible">
      <Flex gap="1rem" style={{ marginBottom: '1rem', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div>
          <button
            style={{ marginRight: '0.5rem', padding: '15px', fontSize : 14 }}
            disabled={selectedAdmins.length === 0}
            onClick={openPasswordModal}
          >
            비밀번호 변경
          </button>
          <button
           style={{ padding: '15px', fontSize : 14 }}
            disabled={selectedAdmins.length === 0}
            onClick={handleDeleteRestore}
          >
            삭제/복구
          </button>
        </div>
      </Flex>
      <Height height="1.75rem" />
      <BoldText>합계 : {admins.length}명</BoldText>
      <Height height="0.5rem" />
      <GridComponent
        data={pagedAdmins}
        columns={columns}
        listLength={admins.length}
        noPagination={false}
        fitRowWidth={true}
        onChangePerPage={setPageSize}
        changePageAction={(page, size) => setCurrentPage(page)}
        selection={true}
        setSelectionArray={handleSelectionChange}
        clearSelection={clearSelection}
        onClearSelection={() => setClearSelection(false)}
      />
      <Modal show={showPasswordModal} onHide={closePasswordModal} title="비밀번호 변경">
        <form onSubmit={handlePasswordSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>새 비밀번호</label>
            <input
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              placeholder="변경하실 비밀번호를 입력해주세요."
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button type="button" onClick={closePasswordModal} style={{ marginRight: '0.5rem' }}>
              취소
            </button>
            <button type="submit">변경</button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default AdminList; 