import { washKeys } from '@/shared/functions/keys';
import { useRouter } from 'next/router';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import GridComponent from '../GridComponent';
import TableSelectEditRenderer from '../TableSelectEditRenderer';
import DeducredInfoModal from './DeductedInfoModal';
import { useState } from 'react';

const OrderTable = ({ data, setData }) => {
  const columns = [
    {
      field: washKeys.requestUid,
      headerName: '세탁 주문 번호',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.requestDate,
      headerName: '세탁 신청일',
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
      field: washKeys.requestQuantity,
      headerName: '세탁 신청 수량',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.estimatedDate,
      headerName: '회수 예정일',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.company,
      headerName: '요청 업체',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.deliveryStatus,
      headerName: '배송 상태',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.sendDate,
      headerName: '세탁물 발송일',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: washKeys.washStatus,
      headerName: '세탁 현황',
      editable: true,
      cellStyle: { textAlign: 'center' },
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['세탁 대기', '세탁중', '세탁 완료'],
      },
      cellRenderer: (params) => (
        <TableSelectEditRenderer value={params.data[washKeys.washStatus]} />
      ),
    },
    {
      field: washKeys.returnStatus,
      headerName: '회수 현황',
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '비고',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => (
        <PrimaryButton
          bordered
          onClick={() => viewDetail(params.data[washKeys.id])}
        >
          차감 내역
        </PrimaryButton>
      ),
    },
  ];

  const [modal, setModal] = useState({
    show: false,
  });

  const viewDetail = (id) => {
    setModal({
      ...modal,
      data: [
        {
          [washKeys.productName]: '200x400 대형 바디타올',
          [washKeys.deductedQuantity]: 2,
          [washKeys.deductedAmount]: 6000,
          [washKeys.deductedReason]: '세탁 불량 폐기',
        },
      ],
      show: true,
    });
  };

  return (
    <>
      <GridComponent data={data} setData={setData} columns={columns} />
      <DeducredInfoModal
        show={modal.show}
        onHide={() => setModal({ ...modal, show: false })}
        data={modal.data}
      />
    </>
  );
};

export default OrderTable;
