import ItemDetailQuantity from '@/shared/components/washing/detail/ItemDetailQuantity';
import ItemDetailTable from '@/shared/components/washing/detail/ItemDetailTable';
import ItemInfoTable from '@/shared/components/washing/detail/ItemInfoTable';
import { washKeys } from '@/shared/functions/keys';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { SecondaryButton } from '@/shared/layout-components/styles/button';
import Content from '@/shared/layout-components/styles/content';
import { useRouter } from 'next/router';
import { useState } from 'react';

const WashingManagementDetail = () => {
  const router = useRouter();
  const [itemInfo, setItemInfo] = useState([
    {
      [washKeys.category1]: '타올',
      [washKeys.category2]: '바디용 타올',
      [washKeys.category3]: '바디용 타올',
      [washKeys.productName]: '바디용 타올',
      [washKeys.quantity]: 10,
    },
  ]);

  const [itemQuantity, setItemQuantity] = useState([
    {
      [washKeys.waitQuantity]: 10,
      [washKeys.onWashingQuantity]: 5,
      [washKeys.finishQuantity]: 5,
    },
  ]);

  const [currentData, setCurrentData] = useState([
    {
      [washKeys.orderNumber]: 'AA13HAAfs',
      [washKeys.requestDate]: '2025-02-01',
      [washKeys.washStatus]: '세탁중',
      [washKeys.requestQuantity]: 34,
    },
  ]);

  return (
    <Container>
      <h2 className="fw-bold">품목별 세탁 현황</h2>
      <ContentWrapper>
        <Card>
          <Flex
            gap="1.75rem"
            direction="column"
            align="flex-start"
            width="100%"
          >
            <Content title="품목 정보">
              <ItemInfoTable data={itemInfo} />
            </Content>
            <Content title="세탁 공정별 현황">
              <ItemDetailQuantity data={itemQuantity} />
            </Content>
            <Content title="세탁 주문별 상세 현황">
              <ItemDetailTable data={currentData} setData={setCurrentData} />
            </Content>
          </Flex>
          <Height height={'2rem'} />
          <div className="text-end w-100">
            <SecondaryButton
              className={'ms-auto'}
              onClick={() => {
                router.push('/stock-management');
              }}
            >
              목록
            </SecondaryButton>
          </div>
        </Card>
      </ContentWrapper>
    </Container>
  );
};

WashingManagementDetail.layout = 'Contentlayout';
export default WashingManagementDetail;
