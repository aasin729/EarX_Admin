import { washKeys } from '@/shared/functions/keys';
import GridComponent from '../../GridComponent';

const ItemInfoTable = ({ data }) => {
  const columns = [
    {
      headerName: '대분류',
      field: washKeys.category1,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '중분류',
      field: washKeys.category2,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '소분류',
      field: washKeys.category3,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '품목명',
      field: washKeys.productName,
      cellStyle: { textAlign: 'center' },
    },
  ];
  return (
    <GridComponent noPagination data={data} fitRowWidth columns={columns} />
  );
};

export default ItemInfoTable;
