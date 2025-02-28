import { washKeys } from '@/shared/functions/keys';
import GridComponent from '../GridComponent';
import Modal from '../Modal';

const DeducredInfoModal = ({ order, show, onHide, data }) => {
  const columns = [
    {
      field: washKeys.productName,
      headerName: '품목명',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.deductedQuantity,
      headerName: '차감 수량',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.deductedAmount,
      headerName: '차감 금액',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.deductedReason,
      headerName: '차감 사유',
      cellStyle: { textAlign: 'center' },
    },
  ];
  return (
    <Modal title={'차감 내역 조회'} show={show} onHide={onHide} size={'lg'}>
      <GridComponent data={data} noPagination fitRowWidth columns={columns} />
    </Modal>
  );
};

export default DeducredInfoModal;
