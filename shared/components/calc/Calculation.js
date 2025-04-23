import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { BoldText } from '@/shared/layout-components/styles/text';
import DatePicker from '../DatePicker';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import SelectBox from '../SelectBox';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import CalcTable from './CalcTable';
import { useState } from 'react';
import { calcKeys } from '@/shared/functions/keys';
import PeriodInputs from '../report/PeriodInputs';

const Calculation = () => {
  const [tableData, setTableData] = useState([
    {
      [calcKeys.id]: '1',
      [calcKeys.createdAt]: '2021-08-31',
      [calcKeys.company]: '요청 업체1',
      [calcKeys.order]: '100',
      [calcKeys.calc]: '100',
      [calcKeys.total]: 300000,
      [calcKeys.spendDeposit]: 10000,
    },
    {
      [calcKeys.id]: '2',
      [calcKeys.createdAt]: '2021-09-01',
      [calcKeys.company]: '요청 업체2',
      [calcKeys.order]: '101',
      [calcKeys.calc]: '101',
      [calcKeys.total]: 310000,
      [calcKeys.spendDeposit]: 11000,
    },
    {
      [calcKeys.id]: '3',
      [calcKeys.createdAt]: '2021-09-02',
      [calcKeys.company]: '요청 업체3',
      [calcKeys.order]: '102',
      [calcKeys.calc]: '102',
      [calcKeys.total]: 320000,
      [calcKeys.spendDeposit]: 12000,
    },
    {
      [calcKeys.id]: '4',
      [calcKeys.createdAt]: '2021-09-03',
      [calcKeys.company]: '요청 업체4',
      [calcKeys.order]: '103',
      [calcKeys.calc]: '103',
      [calcKeys.total]: 330000,
      [calcKeys.spendDeposit]: 13000,
    },
    {
      [calcKeys.id]: '5',
      [calcKeys.createdAt]: '2021-09-04',
      [calcKeys.company]: '요청 업체5',
      [calcKeys.order]: '104',
      [calcKeys.calc]: '104',
      [calcKeys.total]: 340000,
      [calcKeys.spendDeposit]: 14000,
    },
    {
      [calcKeys.id]: '6',
      [calcKeys.createdAt]: '2021-09-05',
      [calcKeys.company]: '요청 업체6',
      [calcKeys.order]: '105',
      [calcKeys.calc]: '105',
      [calcKeys.total]: 350000,
      [calcKeys.spendDeposit]: 15000,
    },
    {
      [calcKeys.id]: '7',
      [calcKeys.createdAt]: '2021-09-06',
      [calcKeys.company]: '요청 업체7',
      [calcKeys.order]: '106',
      [calcKeys.calc]: '106',
      [calcKeys.total]: 360000,
      [calcKeys.spendDeposit]: 16000,
    },
    {
      [calcKeys.id]: '8',
      [calcKeys.createdAt]: '2021-09-07',
      [calcKeys.company]: '요청 업체8',
      [calcKeys.order]: '107',
      [calcKeys.calc]: '107',
      [calcKeys.total]: 370000,
      [calcKeys.spendDeposit]: 17000,
    },
    {
      [calcKeys.id]: '9',
      [calcKeys.createdAt]: '2021-09-08',
      [calcKeys.company]: '요청 업체9',
      [calcKeys.order]: '108',
      [calcKeys.calc]: '108',
      [calcKeys.total]: 380000,
      [calcKeys.spendDeposit]: 18000,
    },
    {
      [calcKeys.id]: '10',
      [calcKeys.createdAt]: '2021-09-09',
      [calcKeys.company]: '요청 업체10',
      [calcKeys.order]: '109',
      [calcKeys.calc]: '109',
      [calcKeys.total]: 390000,
      [calcKeys.spendDeposit]: 19000,
    },
  ]);
  return (
    <Card>
      <GrayCard>
        <Flex gap="0.5rem">
          <PeriodInputs onlyDay title="회수 완료일" />
          <Width width="5rem" />
          <Width width="5.6rem">
            <BoldText>신청 업체</BoldText>
          </Width>
          <Width width={'250px'}>
            <SelectBox className="w-100" placeholder="전체" />
          </Width>
          <PrimaryButton className={'ms-auto'}>검색</PrimaryButton>
        </Flex>
      </GrayCard>
      <Height height={'1rem'} />
      <CalcTable data={tableData} />
    </Card>
  );
};

export default Calculation;
