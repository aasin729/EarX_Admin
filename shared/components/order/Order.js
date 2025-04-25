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

const deliveryStatus = [
  { value: '', label: '전체' },
  { value: '자체 수거', label: '자체 수거' },
  { value: '배송 준비', label: '배송 준비' },
  { value: '배송중', label: '배송중' },
  { value: '배송 완료', label: '배송 완료' },
];

const returnStatus = [
  { value: '', label: '전체' },
  { value: '완료', label: '완료' },
  { value: '미완료', label: '미완료' },
];

const companyList = [
  { value: '서울대학교병원', label: '서울대학교병원' },
  { value: '롯데호텔 서울', label: '롯데호텔 서울' },
  { value: '아워홈 구내식당', label: '아워홈 구내식당' },
  { value: '현대제철 당진공장', label: '현대제철 당진공장' },
  { value: '웨스틴조선호텔', label: '웨스틴조선호텔' },
  { value: '삼성서울병원', label: '삼성서울병원' },
  { value: '신세계푸드 본사', label: '신세계푸드 본사' },
  { value: 'LG화학 여수공장', label: 'LG화학 여수공장' },
  { value: '그랜드하얏트호텔', label: '그랜드하얏트호텔' },
  { value: '고려대학교병원', label: '고려대학교병원' },
];

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
      [washKeys.requestUid]: 'W202501130001',
      [washKeys.requestDate]: '2025-04-20',
      [washKeys.productUid]: 'P00000001',
      [washKeys.productName]: '의료용 가운',
      [washKeys.requestQuantity]: 98,
      [washKeys.estimatedDate]: '2025-04-23',
      [washKeys.company]: '서울대학교병원',
      [washKeys.deliveryStatus]: '배송 완료',
      [washKeys.sendDate]: '2025-04-21',
      [washKeys.washStatus]: '세탁 완료',
      [washKeys.returnStatus]: '회수 완료',
    },
    {
      [washKeys.requestUid]: 'W202501130002',
      [washKeys.requestDate]: '2025-04-18',
      [washKeys.productUid]: 'P00000002',
      [washKeys.productName]: '호텔 침구세트',
      [washKeys.requestQuantity]: 12,
      [washKeys.estimatedDate]: '2025-04-22',
      [washKeys.company]: '롯데호텔 서울',
      [washKeys.deliveryStatus]: '배송 완료',
      [washKeys.sendDate]: '2025-04-20',
      [washKeys.washStatus]: '세탁 완료',
      [washKeys.returnStatus]: '회수 완료',
    },
    {
      [washKeys.requestUid]: 'W202501130003',
      [washKeys.requestDate]: '2025-04-25',
      [washKeys.productUid]: 'P00000003',
      [washKeys.productName]: '식당 앞치마',
      [washKeys.requestQuantity]: 268,
      [washKeys.estimatedDate]: '2025-04-30',
      [washKeys.company]: '아워홈 구내식당',
      [washKeys.deliveryStatus]: '자체 수거',
      [washKeys.sendDate]: '-',
      [washKeys.washStatus]: '세탁 대기',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130004',
      [washKeys.requestDate]: '2025-04-25',
      [washKeys.productUid]: 'P00000004',
      [washKeys.productName]: '산업용 작업복',
      [washKeys.requestQuantity]: 78,
      [washKeys.estimatedDate]: '2025-04-30',
      [washKeys.company]: '현대제철 당진공장',
      [washKeys.deliveryStatus]: '자체 수거',
      [washKeys.sendDate]: '-',
      [washKeys.washStatus]: '세탁 대기',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130005',
      [washKeys.requestDate]: '2025-04-25',
      [washKeys.productUid]: 'P00000005',
      [washKeys.productName]: '호텔 타월',
      [washKeys.requestQuantity]: 76,
      [washKeys.estimatedDate]: '2025-05-01',
      [washKeys.company]: '웨스틴조선호텔',
      [washKeys.deliveryStatus]: '자체 수거',
      [washKeys.sendDate]: '-',
      [washKeys.washStatus]: '세탁 대기',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130006',
      [washKeys.requestDate]: '2025-04-21',
      [washKeys.productUid]: 'P00000006',
      [washKeys.productName]: '의료용 커튼',
      [washKeys.requestQuantity]: 9,
      [washKeys.estimatedDate]: '2025-04-26',
      [washKeys.company]: '삼성서울병원',
      [washKeys.deliveryStatus]: '배송중',
      [washKeys.sendDate]: '2025-04-25',
      [washKeys.washStatus]: '세탁 완료',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130007',
      [washKeys.requestDate]: '2025-04-10',
      [washKeys.productUid]: 'P00000007',
      [washKeys.productName]: '식당 테이블보',
      [washKeys.requestQuantity]: 42,
      [washKeys.estimatedDate]: '2025-04-13',
      [washKeys.company]: '신세계푸드 본사',
      [washKeys.deliveryStatus]: '배송 완료',
      [washKeys.sendDate]: '2025-04-12',
      [washKeys.washStatus]: '세탁 완료',
      [washKeys.returnStatus]: '회수 완료',
    },
    {
      [washKeys.requestUid]: 'W202501130008',
      [washKeys.requestDate]: '2025-04-25',
      [washKeys.productUid]: 'P00000008',
      [washKeys.productName]: '산업용 장갑',
      [washKeys.requestQuantity]: 126,
      [washKeys.estimatedDate]: '2025-05-01',
      [washKeys.company]: 'LG화학 여수공장',
      [washKeys.deliveryStatus]: '자체 수거',
      [washKeys.sendDate]: '-',
      [washKeys.washStatus]: '세탁중',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130009',
      [washKeys.requestDate]: '2025-04-25',
      [washKeys.productUid]: 'P00000009',
      [washKeys.productName]: '호텔 베개커버',
      [washKeys.requestQuantity]: 211,
      [washKeys.estimatedDate]: '2025-04-28',
      [washKeys.company]: '그랜드하얏트호텔',
      [washKeys.deliveryStatus]: '배송 준비',
      [washKeys.sendDate]: '2025-04-26',
      [washKeys.washStatus]: '세탁 완료',
      [washKeys.returnStatus]: '-',
    },
    {
      [washKeys.requestUid]: 'W202501130010',
      [washKeys.requestDate]: '2025-04-11',
      [washKeys.productUid]: 'P00000010',
      [washKeys.productName]: '의료용 마스크',
      [washKeys.requestQuantity]: 526,
      [washKeys.estimatedDate]: '2025-04-20',
      [washKeys.company]: '고려대학교병원',
      [washKeys.deliveryStatus]: '배송 완료',
      [washKeys.sendDate]: '2025-04-19',
      [washKeys.washStatus]: '세탁 완료',
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
              <SelectBox options={searchType} defaultValue={searchType[0]} />
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
              <SelectBox
                className="w-100"
                placeholder="전체"
                options={companyList}
              />
            </Width>
          </Flex>
          <Flex gap="0.5rem">
            <Width width={'6rem'}>
              <BoldText>세탁 배송 상태</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox placeholder="전체" options={deliveryStatus} />
            </Width>
          </Flex>
        </Flex>
        <Height height={'0.5rem'} />
        <Flex gap="3rem">
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>기간 구분</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox options={periodType} defaultValue={periodType[0]} />
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
              <SelectBox placeholder="전체" options={returnStatus} />
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
