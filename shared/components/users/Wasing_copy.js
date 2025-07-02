import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { BoldText } from '@/shared/layout-components/styles/text';
import SelectBox from '../SelectBox';
import {
  Checkbox,
  InputWrapper,
} from '@/shared/layout-components/styles/input';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState } from 'react';
import WashingTable from './WashingTable';
import { washKeys } from '@/shared/functions/keys';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import CategorySelectbox from '../report/CategorySelectbox';

const Washing = () => {
  // const searchType = [
  //   { value: '1', label: '세탁 주문 번호' },
  //   { value: '2', label: '품목명' },
  //   { value: '3', label: '품목 번호' },
  // ];

  const [data, setData] = useState([
    {
      [washKeys.id]: '1',
      [washKeys.category1]: '침구',
      [washKeys.category2]: '매트리스',
      [washKeys.category3]: '일체형 풀커버',
      [washKeys.productUid]: 'P00000001',
      [washKeys.productName]: '송월 일체 풀커버',
      [washKeys.waitQuantity]: 25,
      [washKeys.onWashingQuantity]: 875,
      [washKeys.finishQuantity]: 1000,
    },
    {
      [washKeys.id]: '2',
      [washKeys.category1]: '침구',
      [washKeys.category2]: '매트리스',
      [washKeys.category3]: '상단 토퍼',
      [washKeys.productUid]: 'P00000003',
      [washKeys.productName]: '송월 블랙 토퍼',
      [washKeys.waitQuantity]: 20,
      [washKeys.onWashingQuantity]: 780,
      [washKeys.finishQuantity]: 200,
    },
    {
      [washKeys.id]: '3',
      [washKeys.category1]: '타올',
      [washKeys.category2]: '바디용 타올',
      [washKeys.category3]: '남성 사이즈',
      [washKeys.productUid]: 'P00000005',
      [washKeys.productName]: '200X400 대형 바디타올',
      [washKeys.waitQuantity]: 25,
      [washKeys.onWashingQuantity]: 975,
      [washKeys.finishQuantity]: 1000,
    },
    {
      [washKeys.id]: '4',
      [washKeys.category1]: '가운',
      [washKeys.category2]: '호텔용 가운',
      [washKeys.category3]: '와플소재',
      [washKeys.productUid]: 'P00000001',
      [washKeys.productName]: '와플호텔가운 (아이보리)',
      [washKeys.waitQuantity]: 13,
      [washKeys.onWashingQuantity]: 4987,
      [washKeys.finishQuantity]: 0,
    },
    {
      [washKeys.id]: '5',
      [washKeys.category1]: '타올',
      [washKeys.category2]: '핸드 타올',
      [washKeys.category3]: '40수 코마소재',
      [washKeys.productUid]: 'P00000005',
      [washKeys.productName]: '송월 2024 핸드 타올',
      [washKeys.waitQuantity]: 71,
      [washKeys.onWashingQuantity]: 229,
      [washKeys.finishQuantity]: 2000,
    },
  ]);

  return (
    <Card overflow="visible">
      <GrayCard>
        <CategorySelectbox input />
        <Height height="1rem" />
        <Flex>
          <Checkbox name="cumulative" id="cumulative" label="누적" />
          <div className="text-secondary ms-4 mb-1">
            누적 체크 시 회수 완료된 수량까지 합산되어 조회됩니다.
          </div>
          <PrimaryButton className={'ms-auto'}>검색</PrimaryButton>
        </Flex>
      </GrayCard>
      <Height height="1rem" />
      <WashingTable data={data} setData={setData} />
    </Card>
  );
};

export default Washing;
