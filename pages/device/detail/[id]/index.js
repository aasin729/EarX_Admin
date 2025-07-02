import SpendDepositTable from '@/shared/components/calc/detail/SpendDepositTable';
import WashingTable from '@/shared/components/calc/detail/WashingTable';
import { currencyFormatter } from '@/shared/functions/functions';
import { calcKeys, washKeys } from '@/shared/functions/keys';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { SecondaryButton } from '@/shared/layout-components/styles/button';
import { BoldText } from '@/shared/layout-components/styles/text';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const CalcManagementDetail = () => {
  const [washingData, setWashingData] = useState([
    {
      [calcKeys.id]: '1',
      [washKeys.category1]: '대분류1',
      [washKeys.category2]: '중분류1',
      [washKeys.category3]: '소분류1',
      [washKeys.productName]: '품목명1',
      [washKeys.quantity]: 100,
      [washKeys.salesUnit]: 3000,
    },
    {
      [calcKeys.id]: '2',
      [washKeys.category1]: '대분류2',
      [washKeys.category2]: '중분류2',
      [washKeys.category3]: '소분류2',
      [washKeys.productName]: '품목명2',
      [washKeys.quantity]: 200,
      [washKeys.salesUnit]: 4000,
    },
    {
      [calcKeys.id]: '3',
      [washKeys.category1]: '대분류3',
      [washKeys.category2]: '중분류3',
      [washKeys.category3]: '소분류3',
      [washKeys.productName]: '품목명3',
      [washKeys.quantity]: 300,
      [washKeys.salesUnit]: 5000,
    },
  ]);

  const [deductedData, setDeductedData] = useState([
    {
      [calcKeys.id]: '1',
      [washKeys.category1]: '대분류1',
      [washKeys.category2]: '중분류1',
      [washKeys.category3]: '소분류1',
      [washKeys.productName]: '품목명1',
      [washKeys.deductedQuantity]: 100,
      [washKeys.salesUnit]: 3000,
    },
    {
      [calcKeys.id]: '2',
      [washKeys.category1]: '대분류2',
      [washKeys.category2]: '중분류2',
      [washKeys.category3]: '소분류2',
      [washKeys.productName]: '품목명2',
      [washKeys.deductedQuantity]: 200,
      [washKeys.salesUnit]: 4000,
    },
    {
      [calcKeys.id]: '3',
      [washKeys.category1]: '대분류3',
      [washKeys.category2]: '중분류3',
      [washKeys.category3]: '소분류3',
      [washKeys.productName]: '품목명3',
      [washKeys.deductedQuantity]: 300,
      [washKeys.salesUnit]: 5000,
    },
  ]);
  return (
    <Container>
      <h2 className="fw-bold">정산 내역서</h2>
      <ContentWrapper>
        <Card>
          <GrayCard>
            <Flex direction="column" width="100%" align="flex-start" gap="1rem">
              <Row className="w-100">
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>정산 월</BoldText>
                    </Width>
                    <div>2021년 10월</div>
                  </Flex>
                </Col>
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>물류업체</BoldText>
                    </Width>
                    <div>다모아 물류업체</div>
                  </Flex>
                </Col>
                <Col></Col>
              </Row>
              <Row className="w-100">
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>세탁 신청</BoldText>
                    </Width>
                    <div>10건</div>
                  </Flex>
                </Col>
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>세탁 완료</BoldText>
                    </Width>
                    <div>10건</div>
                  </Flex>
                </Col>
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>보증금 차감</BoldText>
                    </Width>
                    <div>1건</div>
                  </Flex>
                </Col>
              </Row>
              <Row className="w-100">
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>정산 금액</BoldText>
                    </Width>
                    <div>{currencyFormatter.format(2000000)}원</div>
                  </Flex>
                </Col>
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>보증금 차감</BoldText>
                    </Width>
                    <div>{currencyFormatter.format(100000)}원</div>
                  </Flex>
                </Col>
                <Col>
                  <Flex>
                    <Width width="100px">
                      <BoldText>정산 여부</BoldText>
                    </Width>
                    <div>정산 완료</div>
                  </Flex>
                </Col>
              </Row>
            </Flex>
          </GrayCard>
          <Height height="3rem" />
          <BoldText>세탁 완료 항목</BoldText>
          <Height height="1rem" />
          <WashingTable data={washingData} />
          <Height height="2rem" />
          <BoldText>보증금 차감 항목</BoldText>
          <Height height="1rem" />
          <SpendDepositTable data={deductedData} />

          <Flex
            justify="flex-end"
            margin="2rem 0 0 0"
            gap="0.5rem"
            width="100%"
          >
            <SecondaryButton>목록</SecondaryButton>
          </Flex>
        </Card>
      </ContentWrapper>
    </Container>
  );
};

CalcManagementDetail.layout = 'Contentlayout';
export default CalcManagementDetail;
