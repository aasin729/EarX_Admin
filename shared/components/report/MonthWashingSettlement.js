import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { useEffect, useState } from 'react';
import ReportGrid from './ReportGrid';
import { avgBy, currencyFormatter, sumBy } from '@/shared/functions/functions';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import CategorySelectbox from './CategorySelectbox';
import PeriodInputs from './PeriodInputs';
import ClientRadioSelect from './ClientRadioSelect';
import FilterField from './FilterField';

const MonthWashingSettlement = () => {
  const [tableData, setTableData] = useState([]);

  //정렬
  const arrangeNewData = (rows) => {
    const result = [];
    const productList = [];

    rows.forEach((row) => {
      const { product, ...rest } = row;
      const totalWashingAmount = sumBy(product, 'washingAmount');

      product.forEach((item) => {
        result.push({
          ...rest,
          ...item,
          totalSettlement: totalWashingAmount - row.depositDeduction,
        });
      });

      productList.push(...product);

      result.push({
        id: `${row.clientCode} 소계`,
        washingQty: sumBy(product, 'washingQty'),
        washingPrice: avgBy(product, 'washingPrice'),
        washingAmount: totalWashingAmount,
        depositDeduction: row.depositDeduction,
        totalSettlement: totalWashingAmount - row.depositDeduction,
        washingRequestCycle: avgBy(product, 'washingRequestCycle'),
        averageWashingPeriod: avgBy(product, 'averageWashingPeriod'),
      });
    });

    const totalWashingAmount = sumBy(productList, 'washingAmount');
    const totalDepositDeduction = sumBy(result, 'depositDeduction');

    result.push({
      id: '계',
      washingQty: sumBy(productList, 'washingQty'),
      washingPrice: avgBy(productList, 'washingPrice'),
      washingAmount: totalWashingAmount,
      depositDeduction: totalDepositDeduction,
      totalSettlement: totalWashingAmount - totalDepositDeduction,
      washingRequestCycle: avgBy(productList, 'washingRequestCycle'),
      averageWashingPeriod: avgBy(productList, 'averageWashingPeriod'),
    });

    return result;
  };

  useEffect(() => {
    setTableData(arrangeNewData(initData));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <Card overflow="visible">
      <form onSubmit={handleSearch}>
        <FilterField>
          <CategorySelectbox input />
          <Flex gap="0.5rem" width="100%">
            <PeriodInputs onlyMonth />
            <PrimaryButton className={'ms-auto'} type="submit">
              검색
            </PrimaryButton>
          </Flex>
        </FilterField>
      </form>
      <Height height="2rem" />
      <ReportGrid data={tableData} columns={columns} />
    </Card>
  );
};

export default MonthWashingSettlement;

const baseCellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const columns = [
  {
    field: 'id',
    headerName: '번호',
    width: 80,
    cellStyle: { textAlign: 'center' },
    cellRenderer: (params) => params.value,
    colSpan: (params) => (typeof params.data.id === 'string' ? 6 : 1),
  },
  {
    field: 'clientCode',
    headerName: '거래처코드',
    cellStyle: baseCellStyle,
    spanRows: true,
  },
  {
    field: 'clientName',
    headerName: '세탁업체',
    cellStyle: baseCellStyle,
    spanRows: true,
  },
  {
    field: 'productCode',
    headerName: '품목번호',
    cellStyle: { textAlign: 'center' },
  },
  {
    field: 'productName',
    headerName: '품목명',
    cellStyle: { textAlign: 'center' },
  },
  {
    field: 'specification',
    headerName: '판매규격',
    cellStyle: { textAlign: 'center' },
  },
  {
    field: 'washingQty',
    headerName: '세탁수량',
    cellStyle: { textAlign: 'center' },
    cellRenderer: (params) => currencyFormatter.format(params.value),
  },
  {
    field: 'washingPrice',
    headerName: '세탁단가',
    cellStyle: { textAlign: 'center' },
    cellRenderer: (params) => currencyFormatter.format(params.value),
  },
  {
    field: 'washingAmount',
    headerName: '세탁금액',
    cellStyle: { textAlign: 'center' },
    cellRenderer: (params) => currencyFormatter.format(params.value),
  },
  {
    field: 'depositDeduction',
    headerName: '보증금차감',
    cellStyle: baseCellStyle,
    spanRows: true,
    cellRenderer: (params) => currencyFormatter.format(params.value),
  },
  {
    headerName: '정산계',
    cellStyle: baseCellStyle,
    field: 'totalSettlement',
    spanRows: true,
    cellRenderer: (params) => currencyFormatter.format(params.value),
  },
  {
    headerName: '세탁요청주기',
    cellStyle: { textAlign: 'center' },
    field: 'washingRequestCycle',
  },
  {
    headerName: '평균세탁기간',
    cellStyle: { textAlign: 'center' },
    field: 'averageWashingPeriod',
  },
];

const initData = [
  {
    clientCode: 'C0001',
    clientName: '고객사 A',
    depositDeduction: 35000,
    product: [
      {
        id: 1,
        productCode: 'P0001',
        productName: '제품 A',
        specification: '규격 A',
        washingQty: 100,
        washingPrice: 500,
        washingAmount: 50000,
        washingRequestCycle: 30,
        averageWashingPeriod: 15,
      },
      {
        id: 2,
        productCode: 'P0002',
        productName: '제품 B',
        specification: '규격 B',
        washingQty: 200,
        washingPrice: 600,
        washingAmount: 120000,
        washingRequestCycle: 20,
        averageWashingPeriod: 10,
      },
    ],
  },
  {
    clientCode: 'C0002',
    clientName: '고객사 B',
    depositDeduction: 45000,
    product: [
      {
        id: 3,
        productCode: 'P0003',
        productName: '제품 C',
        specification: '규격 C',
        washingQty: 150,
        washingPrice: 550,
        washingAmount: 82500,
        washingRequestCycle: 25,
        averageWashingPeriod: 12,
      },
      {
        id: 4,
        productCode: 'P0004',
        productName: '제품 D',
        specification: '규격 D',
        washingQty: 250,
        washingPrice: 700,
        washingAmount: 175000,
        washingRequestCycle: 35,
        averageWashingPeriod: 18,
      },
    ],
  },
  {
    clientCode: 'C0003',
    clientName: '고객사 C',
    depositDeduction: 30000,
    product: [
      {
        id: 5,
        productCode: 'P0005',
        productName: '제품 E',
        specification: '규격 E',
        washingQty: 120,
        washingPrice: 480,
        washingAmount: 57600,
        washingRequestCycle: 28,
        averageWashingPeriod: 14,
      },
      {
        id: 6,
        productCode: 'P0006',
        productName: '제품 F',
        specification: '규격 F',
        washingQty: 180,
        washingPrice: 620,
        washingAmount: 111600,
        washingRequestCycle: 22,
        averageWashingPeriod: 11,
      },
    ],
  },
  {
    clientCode: 'C0004',
    clientName: '고객사 D',
    depositDeduction: 40000,
    product: [
      {
        id: 7,
        productCode: 'P0007',
        productName: '제품 G',
        specification: '규격 G',
        washingQty: 130,
        washingPrice: 520,
        washingAmount: 67600,
        totalSettlement: 170000,
        washingRequestCycle: 32,
        averageWashingPeriod: 16,
      },
      {
        id: 8,
        productCode: 'P0008',
        productName: '제품 H',
        specification: '규격 H',
        washingQty: 220,
        washingPrice: 750,
        washingAmount: 165000,
        totalSettlement: 240000,
        washingRequestCycle: 40,
        averageWashingPeriod: 20,
      },
    ],
  },
];
