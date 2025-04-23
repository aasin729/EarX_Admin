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
      [washKeys.category1]: '대분류1',
      [washKeys.category2]: '중분류1',
      [washKeys.category3]: '소분류1',
      [washKeys.productUid]: '품목명1',
      [washKeys.productName]: 3,
      [washKeys.waitQuantity]: 100,
      [washKeys.onWashingQuantity]: 200,
      [washKeys.finishQuantity]: 100,
    },
    {
      [washKeys.id]: '2',
      [washKeys.category1]: '대분류2',
      [washKeys.category2]: '중분류2',
      [washKeys.category3]: '소분류2',
      [washKeys.productUid]: '품목명2',
      [washKeys.productName]: 4,
      [washKeys.waitQuantity]: 110,
      [washKeys.onWashingQuantity]: 210,
      [washKeys.finishQuantity]: 110,
    },
    {
      [washKeys.id]: '3',
      [washKeys.category1]: '대분류3',
      [washKeys.category2]: '중분류3',
      [washKeys.category3]: '소분류3',
      [washKeys.productUid]: '품목명3',
      [washKeys.productName]: 5,
      [washKeys.waitQuantity]: 120,
      [washKeys.onWashingQuantity]: 220,
      [washKeys.finishQuantity]: 120,
    },
    {
      [washKeys.id]: '4',
      [washKeys.category1]: '대분류4',
      [washKeys.category2]: '중분류4',
      [washKeys.category3]: '소분류4',
      [washKeys.productUid]: '품목명4',
      [washKeys.productName]: 6,
      [washKeys.waitQuantity]: 130,
      [washKeys.onWashingQuantity]: 230,
      [washKeys.finishQuantity]: 130,
    },
    {
      [washKeys.id]: '5',
      [washKeys.category1]: '대분류5',
      [washKeys.category2]: '중분류5',
      [washKeys.category3]: '소분류5',
      [washKeys.productUid]: '품목명5',
      [washKeys.productName]: 7,
      [washKeys.waitQuantity]: 140,
      [washKeys.onWashingQuantity]: 240,
      [washKeys.finishQuantity]: 140,
    },
    {
      [washKeys.id]: '6',
      [washKeys.category1]: '대분류6',
      [washKeys.category2]: '중분류6',
      [washKeys.category3]: '소분류6',
      [washKeys.productUid]: '품목명6',
      [washKeys.productName]: 8,
      [washKeys.waitQuantity]: 150,
      [washKeys.onWashingQuantity]: 250,
      [washKeys.finishQuantity]: 150,
    },
    {
      [washKeys.id]: '7',
      [washKeys.category1]: '대분류7',
      [washKeys.category2]: '중분류7',
      [washKeys.category3]: '소분류7',
      [washKeys.productUid]: '품목명7',
      [washKeys.productName]: 9,
      [washKeys.waitQuantity]: 160,
      [washKeys.onWashingQuantity]: 260,
      [washKeys.finishQuantity]: 160,
    },
    {
      [washKeys.id]: '8',
      [washKeys.category1]: '대분류8',
      [washKeys.category2]: '중분류8',
      [washKeys.category3]: '소분류8',
      [washKeys.productUid]: '품목명8',
      [washKeys.productName]: 10,
      [washKeys.waitQuantity]: 170,
      [washKeys.onWashingQuantity]: 270,
      [washKeys.finishQuantity]: 170,
    },
    {
      [washKeys.id]: '9',
      [washKeys.category1]: '대분류9',
      [washKeys.category2]: '중분류9',
      [washKeys.category3]: '소분류9',
      [washKeys.productUid]: '품목명9',
      [washKeys.productName]: 11,
      [washKeys.waitQuantity]: 180,
      [washKeys.onWashingQuantity]: 280,
      [washKeys.finishQuantity]: 180,
    },
    {
      [washKeys.id]: '10',
      [washKeys.category1]: '대분류10',
      [washKeys.category2]: '중분류10',
      [washKeys.category3]: '소분류10',
      [washKeys.productUid]: '품목명10',
      [washKeys.productName]: 12,
      [washKeys.waitQuantity]: 190,
      [washKeys.onWashingQuantity]: 290,
      [washKeys.finishQuantity]: 190,
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
