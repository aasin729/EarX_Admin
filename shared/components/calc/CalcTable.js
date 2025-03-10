import { calcKeys } from '@/shared/functions/keys';
import GridComponent from '../GridComponent';
import { currencyFormatter } from '@/shared/functions/functions';
import { useRouter } from 'next/router';

const CalcTable = ({ data }) => {
  const columns = [
    {
      field: calcKeys.id,
      headerName: '번호',
      width: 100,
      cellStyle: { textAlign: 'center' },
    },
    {
      field: calcKeys.createdAt,
      headerName: '세탁 신청일',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: calcKeys.company,
      headerName: '요청 업체',
      cellStyle: { textAlign: 'center' },
      flex: 1,
    },
    {
      field: calcKeys.order,
      headerName: '총 신청 수량',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: calcKeys.calc,
      headerName: '정산 수량',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => {
        return currencyFormatter.format(params.value);
      },
    },
    {
      field: calcKeys.total,
      headerName: '금액 합계',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => {
        return `${currencyFormatter.format(params.value)}원`;
      },
    },
    {
      field: calcKeys.spendDeposit,
      headerName: '보증금 차감',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => {
        return `${currencyFormatter.format(params.value)}원`;
      },
    },
  ];

  const router = useRouter();
  const viewCalcDetail = (data) => {
    router.push(`/calc-management/detail/${data[calcKeys.id]}`);
  };
  return (
    <GridComponent
      data={data}
      columns={columns}
      fitRowWidth
      onRowClicked={viewCalcDetail}
    />
  );
};

export default CalcTable;
