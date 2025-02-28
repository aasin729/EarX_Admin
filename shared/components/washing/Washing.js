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

const Washing = () => {
  const searchType = [
    { value: '1', label: '세탁 주문 번호' },
    { value: '2', label: '품목명' },
    { value: '3', label: '품목 번호' },
  ];

  const [data, setData] = useState([
    {
      [washKeys.id]: '1',
      [washKeys.category1]: '143143141',
      [washKeys.category2]: '2021-08-31',
      [washKeys.category3]: '123123',
      [washKeys.productUid]: '품목명',
      [washKeys.productName]: 3,
      [washKeys.waitQuantity]: 100,
      [washKeys.onWashingQuantity]: 200,
      [washKeys.finishQuantity]: 100,
    },
  ]);

  return (
    <Card overflow="visible">
      <GrayCard>
        <Flex gap="3rem">
          <Flex gap="0.5rem">
            <Width width={'5rem'}>
              <BoldText>품목 구분</BoldText>
            </Width>
            <Width width={'10rem'}>
              <SelectBox options={searchType} />
            </Width>
            <Width width={'10rem'}>
              <SelectBox className="w-100" />
            </Width>
            <Width width={'10rem'}>
              <SelectBox className="w-100" />
            </Width>
            <Width width={'17rem'}>
              <InputWrapper className="w-100" />
            </Width>
          </Flex>
        </Flex>
        <Height height="1rem" />
        <Flex>
          <Checkbox name="cumulative" id="cumulative" label="누적" />
          <div className="text-secondary ms-4 mb-1">
            누적 체크 시 회수 완료된 수량까지 합산되어 조회됩니다.​
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
