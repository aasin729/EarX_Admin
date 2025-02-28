import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { BoldText } from '@/shared/layout-components/styles/text';
import SelectBox from '../SelectBox';
import { InputWrapper } from '@/shared/layout-components/styles/input';
import DatePicker from '../DatePicker';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState } from 'react';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import OrderTable from './OrderTable';
import { washKeys } from '@/shared/functions/keys';

const Order = () => {
  const searchType = [
    { value: '1', label: '세탁 주문 번호' },
    { value: '2', label: '품목명' },
    { value: '3', label: '품목 번호' },
  ];

  const periodType = [
    { value: '1', label: '세탁 신청일' },
    { value: '2', label: '회수 예정일' },
  ];

  const [date, setDate] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  const [data, setData] = useState([
    {
      [washKeys.requestUid]: '143143141',
      [washKeys.requestDate]: '2021-08-31',
      [washKeys.productUid]: '123123',
      [washKeys.productName]: '품목명',
      [washKeys.requestQuantity]: 3,
      [washKeys.estimatedDate]: '2021-09-01',
      [washKeys.company]: '요청 업체',
      [washKeys.deliveryStatus]: '배송 상태',
      [washKeys.sendDate]: '2021-09-01',
      [washKeys.washStatus]: '세탁 대기',
      [washKeys.returnStatus]: '회수 완료',
    },
  ]);

  return (
    <Card overflow="visible">
      <GrayCard>
        <Flex gap="3rem">
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>검색 구분</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox options={searchType} />
            </Width>
            <Width width={'17.4rem'}>
              <InputWrapper className="w-100" />
            </Width>
          </Flex>
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>신청 업체</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox className="w-100" />
            </Width>
          </Flex>
          <Flex gap="0.5rem">
            <Width width={'6rem'}>
              <BoldText>세탁 배송 상태</BoldText>
            </Width>
            <SelectBox />
          </Flex>
        </Flex>
        <Height height={'0.5rem'} />
        <Flex gap="3rem">
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>기간 구분</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox options={periodType} />
            </Width>
            <Width width={'8rem'}>
              <DatePicker
                onChange={(dateValue) => {
                  setDate({ ...date, startDate: dateValue });
                }}
                selected={date.startDate}
                placeholderText="시작일"
                maxDate={new Date()}
              />
            </Width>
            ~
            <Width width={'8rem'}>
              <DatePicker
                onChange={(dateValue) => {
                  setDate({ ...date, endDate: dateValue });
                }}
                selected={date.endDate}
                placeholderText="종료일"
                maxDate={new Date()}
                minDate={date.startDate}
              />
            </Width>
          </Flex>
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>회수 여부</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox />
            </Width>
          </Flex>
          <PrimaryButton className={'ms-auto'}>검색</PrimaryButton>
        </Flex>
      </GrayCard>
      <Height height="1rem" />
      <OrderTable data={data} setData={setData} />
    </Card>
  );
};

export default Order;
