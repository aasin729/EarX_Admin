import WashingTable from '@/shared/components/calc/detail/WashingTable';
import { currencyFormatter } from '@/shared/functions/functions';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { BoldText } from '@/shared/layout-components/styles/text';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const CalcManagementDetail = () => {
  const [washingData, setWashingData] = useState([]);
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
        </Card>
      </ContentWrapper>
    </Container>
  );
};

CalcManagementDetail.layout = 'Contentlayout';
export default CalcManagementDetail;
