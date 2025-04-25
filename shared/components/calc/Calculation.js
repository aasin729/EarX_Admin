import {
  ContainerCard,
  GrayCard,
} from '@/shared/layout-components/spaces/CustomCard';
import { BoldText } from '@/shared/layout-components/styles/text';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { Height } from '@/shared/layout-components/spaces/SpacesComponenet';
import SelectBox from '../SelectBox';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import CalcTable from './CalcTable';
import { useEffect, useState } from 'react';
import { calcKeys } from '@/shared/functions/keys';
import PeriodInputs from '../report/PeriodInputs';

const Calculation = () => {
  const hotelOptions = [
    { value: '', label: '전체' },
    { value: 'grand_hotel', label: '그랜드 호텔' },
    { value: 'paradise_hotel', label: '파라다이스 호텔' },
    { value: 'lotte_hotel', label: '롯데 호텔' },
    { value: 'hilton_hotel', label: '힐튼 호텔' },
    { value: 'shilla_hotel', label: '신라 호텔' },
  ];

  const [selectedHotel, setSelectedHotel] = useState('');
  const [searchDates, setSearchDates] = useState({
    startDate: '',
    endDate: '',
  });

  const dummyData = [
    {
      [calcKeys.id]: '1',
      [calcKeys.createdAt]: '2025-03-19',
      [calcKeys.company]: '그랜드 호텔',
      [calcKeys.order]: 10,
      [calcKeys.calc]: 8,
      [calcKeys.total]: 2850000,
      [calcKeys.spendDeposit]: 285000,
    },
    {
      [calcKeys.id]: '2',
      [calcKeys.createdAt]: '2025-03-19',
      [calcKeys.company]: '파라다이스 호텔',
      [calcKeys.order]: 7,
      [calcKeys.calc]: 6,
      [calcKeys.total]: 1950000,
      [calcKeys.spendDeposit]: 195000,
    },
    {
      [calcKeys.id]: '3',
      [calcKeys.createdAt]: '2025-03-18',
      [calcKeys.company]: '롯데 호텔',
      [calcKeys.order]: 12,
      [calcKeys.calc]: 10,
      [calcKeys.total]: 3200000,
      [calcKeys.spendDeposit]: 320000,
    },
    {
      [calcKeys.id]: '4',
      [calcKeys.createdAt]: '2025-03-18',
      [calcKeys.company]: '힐튼 호텔',
      [calcKeys.order]: 9,
      [calcKeys.calc]: 8,
      [calcKeys.total]: 2750000,
      [calcKeys.spendDeposit]: 275000,
    },
    {
      [calcKeys.id]: '5',
      [calcKeys.createdAt]: '2025-03-17',
      [calcKeys.company]: '신라 호텔',
      [calcKeys.order]: 15,
      [calcKeys.calc]: 12,
      [calcKeys.total]: 4100000,
      [calcKeys.spendDeposit]: 410000,
    },
    {
      [calcKeys.id]: '6',
      [calcKeys.createdAt]: '2025-03-17',
      [calcKeys.company]: '그랜드 호텔',
      [calcKeys.order]: 11,
      [calcKeys.calc]: 9,
      [calcKeys.total]: 2950000,
      [calcKeys.spendDeposit]: 295000,
    },
    {
      [calcKeys.id]: '7',
      [calcKeys.createdAt]: '2025-03-16',
      [calcKeys.company]: '파라다이스 호텔',
      [calcKeys.order]: 6,
      [calcKeys.calc]: 5,
      [calcKeys.total]: 1850000,
      [calcKeys.spendDeposit]: 185000,
    },
    {
      [calcKeys.id]: '8',
      [calcKeys.createdAt]: '2025-03-16',
      [calcKeys.company]: '롯데 호텔',
      [calcKeys.order]: 13,
      [calcKeys.calc]: 11,
      [calcKeys.total]: 3350000,
      [calcKeys.spendDeposit]: 335000,
    },
    {
      [calcKeys.id]: '9',
      [calcKeys.createdAt]: '2025-03-15',
      [calcKeys.company]: '힐튼 호텔',
      [calcKeys.order]: 8,
      [calcKeys.calc]: 7,
      [calcKeys.total]: 2650000,
      [calcKeys.spendDeposit]: 265000,
    },
    {
      [calcKeys.id]: '10',
      [calcKeys.createdAt]: '2025-03-15',
      [calcKeys.company]: '신라 호텔',
      [calcKeys.order]: 14,
      [calcKeys.calc]: 13,
      [calcKeys.total]: 3950000,
      [calcKeys.spendDeposit]: 395000,
    },
  ];

  const [tableData, setTableData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = () => {
    let filtered = [...dummyData];

    if (selectedHotel) {
      filtered = filtered.filter((item) => {
        const hotelMap = {
          grand_hotel: '그랜드 호텔',
          paradise_hotel: '파라다이스 호텔',
          lotte_hotel: '롯데 호텔',
          hilton_hotel: '힐튼 호텔',
          shilla_hotel: '신라 호텔',
        };
        return item[calcKeys.company] === hotelMap[selectedHotel];
      });
    }

    if (searchDates.startDate && searchDates.endDate) {
      filtered = filtered.filter(
        (item) =>
          new Date(item[calcKeys.createdAt]) >=
            new Date(searchDates.startDate) &&
          new Date(item[calcKeys.createdAt]) <= new Date(searchDates.endDate),
      );
    }

    setFilteredData(filtered);
  };

  const handlePeriodChange = (startDate, endDate) => {
    setSearchDates({ startDate, endDate });
  };

  return (
    <ContainerCard>
      <GrayCard>
        <Flex gap="0.5rem">
          <PeriodInputs
            onlyDay
            title="회수 완료일"
            onPeriodChange={handlePeriodChange}
          />
          <div className="me-3 ms-5">
            <BoldText>신청 업체</BoldText>
          </div>
          <SelectBox
            className="wd-250"
            options={hotelOptions}
            onChange={(option) => setSelectedHotel(option.value)}
            value={selectedHotel}
          />
          <PrimaryButton className={'ms-auto'} onClick={handleSearch}>
            검색
          </PrimaryButton>
        </Flex>
      </GrayCard>
      <Height height="1.75rem" />
      <BoldText>합계 : {filteredData.length}건</BoldText>
      <Height height="0.5rem" />

      <CalcTable data={filteredData} />
    </ContainerCard>
  );
};

export default Calculation;
