import AnnouncementComponent from '@/shared/components/dashboard/AnnouncementComponent';
import CurrentReturn from '@/shared/components/dashboard/CurrentReturn';
import CurrentWashing from '@/shared/components/dashboard/CurrentWashing';
import { announcementKeys } from '@/shared/functions/keys';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import { RadioInput } from '@/shared/layout-components/styles/input';
import Link from 'next/link';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiChevronsRight } from 'react-icons/fi';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    announcement: [
      {
        [announcementKeys.id]: 1,
        [announcementKeys.title]:
          '2024년 4월 세탁물 수거 일정 변경 안내 (공휴일 조정)',
        [announcementKeys.createdAt]: '2024-04-23',
      },
      {
        [announcementKeys.id]: 2,
        [announcementKeys.title]: '새로운 세탁물 분류 시스템 도입 및 교육 안내',
        [announcementKeys.createdAt]: '2024-04-15',
      },
      {
        [announcementKeys.id]: 3,
        [announcementKeys.title]: '세탁물 배송 지연 관련 사과 및 보상 안내',
        [announcementKeys.createdAt]: '2024-04-10',
      },
    ],
    currentOrder: {
      washing: {
        waiting: 1,
        onGoing: 1,
        completed: 1,
      },
      return: {
        complated: 1,
        uncompleted: 1,
      },
    },
  });
  const [periodState, setPeriodState] = useState('1');
  const handlePeriod = (e) => {
    setPeriodState(e.target.value);
  };
  return (
    <Container>
      <ContentWrapper>
        <Row>
          <Col xs={6}>
            <Flex margin="0 0 0.5rem 0">
              <h2 className="fw-bold mb-3">공지사항</h2>
              <Link href="/announcement" className="ms-auto text-primary">
                전체 보기 <FiChevronsRight />
              </Link>
            </Flex>
            <AnnouncementComponent data={dashboardData.announcement} />
          </Col>
          <Col xs="6">
            <Flex
              direction="column"
              width="100%"
              height="100%"
              align="flex-start"
            >
              <Flex width="100%" margin="0 0 0.5rem 0">
                <h2 className="fw-bold mb-3">나의 세탁 현황 </h2>
                <Flex margin="0 2rem 0 auto" className="ms-auto" gap="1rem">
                  <RadioInput
                    value="1"
                    onChange={handlePeriod}
                    label="최근 1주"
                    name="period"
                    id="recent1week"
                    defaultChecked={periodState === '1'}
                  />
                  <RadioInput
                    value="2"
                    onChange={handlePeriod}
                    label="최근 2주"
                    name="period"
                    id="recent2week"
                    defaultChecked={periodState === '2'}
                  />
                  <RadioInput
                    value="4"
                    onChange={handlePeriod}
                    label="최근 4주"
                    name="period"
                    id="recent4week"
                    defaultChecked={periodState === '4'}
                  />
                </Flex>
              </Flex>
              <Row className="w-100 flex-1">
                <Col xs="6">
                  <CurrentWashing data={dashboardData.currentOrder.washing} />
                </Col>
                <Col xs="6">
                  <CurrentReturn data={dashboardData.currentOrder.return} />
                </Col>
              </Row>
            </Flex>
          </Col>
        </Row>
      </ContentWrapper>
    </Container>
  );
};

Dashboard.layout = 'Contentlayout';
export default Dashboard;
