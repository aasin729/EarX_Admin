import { washKeys } from '@/shared/functions/keys';
import GridComponent from '../../GridComponent';

const ItemDetailTable = ({ data, setData }) => {
  const columns = [
    {
      headerName: '세탁 주문 번호',
      field: washKeys.orderNumber,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '세탁 신청일',
      field: washKeys.requestDate,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '세탁 신청 수량',
      field: washKeys.requestQuantity,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '세탁 현황',
      field: washKeys.washStatus,
      cellStyle: { textAlign: 'center' },
    },
  ];
  return (
    <GridComponent
      data={data}
      setData={setData}
      columns={columns}
      fitRowWidth
    />
  );
};

export default ItemDetailTable;
