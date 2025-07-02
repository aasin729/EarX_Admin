import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState } from 'react';
import { washKeys } from '@/shared/functions/keys';
import { useRouter } from 'next/router';
import GridComponent from '../GridComponent';

const Washing = () => {
  const initData = [
    {
      [washKeys.id]: '1',
      [washKeys.category1]: '침구',
      [washKeys.category2]: '매트리스',
      [washKeys.category3]: '일체형 풀커버',
      [washKeys.productUid]: 'P00000001',
      [washKeys.productName]: '송월 일체 풀커버',
      [washKeys.waitQuantity]: 25,
      [washKeys.onWashingQuantity]: 875,
      [washKeys.finishQuantity]: 1000,
    },
    {
      [washKeys.id]: '2',
      [washKeys.category1]: '침구',
      [washKeys.category2]: '매트리스',
      [washKeys.category3]: '상단 토퍼',
      [washKeys.productUid]: 'P00000003',
      [washKeys.productName]: '송월 블랙 토퍼',
      [washKeys.waitQuantity]: 20,
      [washKeys.onWashingQuantity]: 780,
      [washKeys.finishQuantity]: 200,
    },
    {
      [washKeys.id]: '3',
      [washKeys.category1]: '타올',
      [washKeys.category2]: '바디용 타올',
      [washKeys.category3]: '남성 사이즈',
      [washKeys.productUid]: 'P00000005',
      [washKeys.productName]: '200X400 대형 바디타올',
      [washKeys.waitQuantity]: 25,
      [washKeys.onWashingQuantity]: 975,
      [washKeys.finishQuantity]: 1000,
    },
    {
      [washKeys.id]: '4',
      [washKeys.category1]: '가운',
      [washKeys.category2]: '호텔용 가운',
      [washKeys.category3]: '와플소재',
      [washKeys.productUid]: 'P00000001',
      [washKeys.productName]: '와플호텔가운 (아이보리)',
      [washKeys.waitQuantity]: 13,
      [washKeys.onWashingQuantity]: 4987,
      [washKeys.finishQuantity]: 0,
    },
    {
      [washKeys.id]: '5',
      [washKeys.category1]: '타올',
      [washKeys.category2]: '핸드 타올',
      [washKeys.category3]: '40수 코마소재',
      [washKeys.productUid]: 'P00000005',
      [washKeys.productName]: '송월 2024 핸드 타올',
      [washKeys.waitQuantity]: 71,
      [washKeys.onWashingQuantity]: 229,
      [washKeys.finishQuantity]: 2000,
    },
  ];

  const [data, setData] = useState(initData);

  // WashingTable 내부 구현
  const [clearSelection, setClearSelection] = useState(false);
  const router = useRouter();

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

  const viewWashingDetail = (rowData) => {
    router.push(`/washing-management/detail/${rowData[washKeys.id]}`);
  };

  return (
    <Card overflow="visible">
      <GridComponent
        data={data}
        setData={setData}
        columns={columns}
        onRowClicked={viewWashingDetail}
        fitRowWidth
        clearSelection={clearSelection}
        onClearSelection={() => setClearSelection(false)}
      />
    </Card>
  );
};

export default Washing;
