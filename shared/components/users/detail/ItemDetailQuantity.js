import { washKeys } from '@/shared/functions/keys';
import GridComponent from '../../GridComponent';

const ItemDetailQuantity = ({ data }) => {
  const columns = [
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
      flex: 1,
    },
    {
      field: washKeys.waitQuantity,
      headerName: '세탁 대기',
      cellStyle: { textAlign: 'center' },
      flex: 1,
    },
    {
      field: washKeys.onWashingQuantity,
      headerName: '세탁 중',
      cellStyle: { textAlign: 'center' },
      flex: 1,
    },
    {
      field: washKeys.finishQuantity,
      headerName: '세탁 완료',
      cellStyle: { textAlign: 'center' },
      flex: 1,
    },
  ];
  return (
    <GridComponent noPagination data={data} columns={columns} fitRowWidth />
  );
};

export default ItemDetailQuantity;
