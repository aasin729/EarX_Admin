import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import GridComponent from '../GridComponent';
import { announcementKeys } from '@/shared/functions/keys';
import { DefaultButton } from '@/shared/layout-components/styles/button';
import { FaRegFile } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AnnouncementTable = ({ data, setData }) => {
  const [clearSelection, setClearSelection] = useState(false);

  const columns = [
    {
      field: announcementKeys.id,
      headerName: '번호',
      width: 100,
      cellStyle: { textAlign: 'center' },
      onCellClicked: (params) => viewDetail(params.data[announcementKeys.id]),
    },
    {
      field: announcementKeys.title,
      headerName: '제목',
      cellStyle: { textAlign: 'center' },
      flex: 1,
      onCellClicked: (params) => viewDetail(params.data[announcementKeys.id]),
    },
    {
      headerName: '첨부 파일',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => {
        return params.data[announcementKeys.attachedFile] ? (
          <DefaultButton onClick={downloadFile}>
            <FaRegFile />
          </DefaultButton>
        ) : (
          <></>
        );
      },
    },
    {
      field: announcementKeys.createdAt,
      headerName: '작성일',
      cellStyle: { textAlign: 'center' },
      onCellClicked: (params) => viewDetail(params.data[announcementKeys.id]),
    },
  ];

  const router = useRouter();
  const viewDetail = (id) => {
    router.push(`/announcement/detail/${id}`);
  };

  const downloadFile = () => {};
  return (
    <>
      <Card>
        <GridComponent
          data={data}
          setData={setData}
          columns={columns}
          fitRowWidth
          onRowClicked
          clearSelection={clearSelection}
          onClearSelection={() => setClearSelection(false)}
        />
      </Card>
    </>
  );
};

export default AnnouncementTable;
