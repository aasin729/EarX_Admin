import { calcKeys, washKeys } from '@/shared/functions/keys';
import GridComponent from '../../GridComponent';
import { currencyFormatter } from '@/shared/functions/functions';

const SpendDepositTable = ({ data }) => {
  const columns = [
    {
      field: calcKeys.id,
      headerName: '번호',
      width: 100,
      cellStyle: { textAlign: 'center' },
    },
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
      field: washKeys.productName,
      headerName: '품목명',
      cellStyle: { textAlign: 'center' },
      flex: 1,
    },
    {
      field: washKeys.deductedQuantity,
      headerName: '차감 수량',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => currencyFormatter.format(params.value),
    },
    {
      field: washKeys.salesUnit,
      headerName: '차감 단가',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) => currencyFormatter.format(params.value),
    },
    {
      field: '',
      headerName: '금액 합계',
      cellStyle: { textAlign: 'center' },
      valueFormatter: (params) =>
        currencyFormatter.format(
          params.data[washKeys.deductedQuantity] *
            params.data[washKeys.salesUnit],
        ),
    },
  ];
  return (
    <GridComponent noPagination data={data} columns={columns} fitRowWidth />
  );
};

export default SpendDepositTable;
