import {
  Card,
  Height,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { useEffect, useState } from 'react';
import ReportGrid from './ReportGrid';
import { avgBy, currencyFormatter, sumBy } from '@/shared/functions/functions';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import CategorySelectbox from './CategorySelectbox';
import PeriodInputs from './PeriodInputs';
import FilterField from './FilterField';

const MonthWashingSettlement = () => {
  const [tableData, setTableData] = useState([]);
  const [searchParams, setSearchParams] = useState({
    category1: '',
    category2: '',
    category3: '',
    productName: '',
    startDate: '',
    endDate: '',
  });

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

    const filteredData = initData
      .map((client) => {
        const filteredProducts = client.product.filter((product) => {
          const matchCategory =
            !searchParams.category3 ||
            product.productCode.startsWith(searchParams.category3);
          const matchProduct =
            !searchParams.productName ||
            product.productName.includes(searchParams.productName) ||
            product.productCode.includes(searchParams.productName);
          const matchDate =
            (!searchParams.startDate && !searchParams.endDate) ||
            (product.washingDate >= searchParams.startDate &&
              product.washingDate <= searchParams.endDate);
          return matchCategory && matchProduct && matchDate;
        });

        if (filteredProducts.length === 0) return null;

        return {
          ...client,
          product: filteredProducts,
        };
      })
      .filter(Boolean);

    setTableData(arrangeNewData(filteredData));
  };

  const handleCategoryChange = (category, value) => {
    setSearchParams((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleProductSearch = (e) => {
    setSearchParams((prev) => ({
      ...prev,
      productName: e.target.value,
    }));
  };

  const handlePeriodChange = (startDate, endDate) => {
    setSearchParams((prev) => ({
      ...prev,
      startDate,
      endDate,
    }));
  };

  return (
    <Card overflow="visible">
      <form onSubmit={handleSearch}>
        <FilterField>
          <CategorySelectbox
            input
            onCategoryChange={handleCategoryChange}
            onProductSearch={handleProductSearch}
          />
          <Flex gap="0.5rem" width="100%">
            <PeriodInputs onlyMonth onPeriodChange={handlePeriodChange} />
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
    clientCode: 'H0001',
    clientName: '롯데호텔 서울',
    depositDeduction: 150000,
    product: [
      {
        id: 1,
        productCode: 'L0001',
        productName: '베개커버',
        specification: '70x50cm',
        washingQty: 2500,
        washingPrice: 800,
        washingAmount: 2000000,
        washingRequestCycle: 3,
        averageWashingPeriod: 2,
        washingDate: '2024-01-15',
      },
      {
        id: 2,
        productCode: 'L0002',
        productName: '이불커버',
        specification: '200x230cm',
        washingQty: 1800,
        washingPrice: 2500,
        washingAmount: 4500000,
        washingRequestCycle: 5,
        averageWashingPeriod: 3,
        washingDate: '2024-01-20',
      },
    ],
  },
  {
    clientCode: 'H0002',
    clientName: '웨스틴조선 서울',
    depositDeduction: 180000,
    product: [
      {
        id: 3,
        productCode: 'W0001',
        productName: '수건',
        specification: '80x150cm',
        washingQty: 5000,
        washingPrice: 500,
        washingAmount: 2500000,
        washingRequestCycle: 2,
        averageWashingPeriod: 1,
        washingDate: '2024-01-10',
      },
      {
        id: 4,
        productCode: 'W0002',
        productName: '침대시트',
        specification: '180x200cm',
        washingQty: 2000,
        washingPrice: 2000,
        washingAmount: 4000000,
        washingRequestCycle: 4,
        averageWashingPeriod: 2,
        washingDate: '2024-01-25',
      },
    ],
  },
  {
    clientCode: 'H0003',
    clientName: '그랜드하얏트 서울',
    depositDeduction: 200000,
    product: [
      {
        id: 5,
        productCode: 'G0001',
        productName: '베개커버',
        specification: '70x50cm',
        washingQty: 3000,
        washingPrice: 800,
        washingAmount: 2400000,
        washingRequestCycle: 3,
        averageWashingPeriod: 2,
        washingDate: '2024-02-05',
      },
      {
        id: 6,
        productCode: 'G0002',
        productName: '이불커버',
        specification: '200x230cm',
        washingQty: 2200,
        washingPrice: 2500,
        washingAmount: 5500000,
        washingRequestCycle: 5,
        averageWashingPeriod: 3,
        washingDate: '2024-02-10',
      },
    ],
  },
  {
    clientCode: 'H0004',
    clientName: '반얀트리 클럽 앤 스파 서울',
    depositDeduction: 160000,
    product: [
      {
        id: 7,
        productCode: 'B0001',
        productName: '수건',
        specification: '80x150cm',
        washingQty: 4500,
        washingPrice: 500,
        washingAmount: 2250000,
        washingRequestCycle: 2,
        averageWashingPeriod: 1,
        washingDate: '2024-02-15',
      },
      {
        id: 8,
        productCode: 'B0002',
        productName: '침대시트',
        specification: '180x200cm',
        washingQty: 1800,
        washingPrice: 2000,
        washingAmount: 3600000,
        washingRequestCycle: 4,
        averageWashingPeriod: 2,
        washingDate: '2024-02-20',
      },
    ],
  },
];
