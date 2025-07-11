import { washKeys } from '@/shared/functions/keys';
import { useRouter } from 'next/router';
import GridComponent from '../GridComponent';
import { useState } from 'react';

const WashingTable = ({ data, setData }) => {
  const [clearSelection, setClearSelection] = useState(false);

  const columns = [
    {
      field: washKeys.category1,
      headerName: '대분류',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.category2,
      headerName: '중분류',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.category3,
      headerName: '소분류',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.productUid,
      headerName: '품목 번호',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.productName,
      headerName: '품목명',
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '총 수량',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => {
        return (
          params.data[washKeys.waitQuantity] +
          params.data[washKeys.onWashingQuantity] +
          params.data[washKeys.finishQuantity]
        );
      },
    },
    {
      field: washKeys.waitQuantity,
      headerName: '세탁 대기',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.onWashingQuantity,
      headerName: '세탁 중',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.finishQuantity,
      headerName: '세탁 완료',
      cellStyle: { textAlign: 'center' },
    },
  ];

  const router = useRouter();
  const viewWashingDetail = (data) => {
    router.push(`/washing-management/detail/${data[washKeys.id]}`);
  };

  return (
    <>
      <GridComponent
        data={data}
        setData={setData}
        columns={columns}
        onRowClicked={viewWashingDetail}
        fitRowWidth
        clearSelection={clearSelection}
        onClearSelection={() => setClearSelection(false)}
      />
    </>
  );
};

export default WashingTable;
