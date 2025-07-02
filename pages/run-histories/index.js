import AnnouncementTable from '@/shared/components/announcement/Announcement';
import { announcementKeys } from '@/shared/functions/keys';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { useState } from 'react';

const Announcement = () => {
  const [data, setData] = useState([
    {
      [announcementKeys.id]: 1,
      [announcementKeys.title]: '2025년 호텔 린넨류 세탁 서비스 가격 조정 안내',
      [announcementKeys.attachedFile]: '2024_price_adjustment.pdf',
      [announcementKeys.createdAt]: '2025-03-19',
    },
    {
      [announcementKeys.id]: 2,
      [announcementKeys.title]: '설 연휴 기간 세탁물 수거 일정 변경 공지',
      [announcementKeys.attachedFile]: 'lunar_new_year_schedule.pdf',
      [announcementKeys.createdAt]: '2025-03-15',
    },
    {
      [announcementKeys.id]: 3,
      [announcementKeys.title]:
        '친환경 세제 도입에 따른 세탁 프로세스 개선 안내',
      [announcementKeys.attachedFile]: 'eco_friendly_detergent.pdf',
      [announcementKeys.createdAt]: '2025-03-10',
    },
    {
      [announcementKeys.id]: 4,
      [announcementKeys.title]: '호텔 유니폼 특별 세탁 서비스 프로모션',
      [announcementKeys.attachedFile]: 'uniform_promotion.pdf',
      [announcementKeys.createdAt]: '2025-03-05',
    },
    {
      [announcementKeys.id]: 5,
      [announcementKeys.title]: '연말연시 특수 오염 세탁 서비스 안내',
      [announcementKeys.attachedFile]: 'special_cleaning_service.pdf',
      [announcementKeys.createdAt]: '2025-03-01',
    },
  ]);
  return (
    <Container>
      <h1 className="fw-bold">히스토리</h1>
      <ContentWrapper>
        {/* <AnnouncementTable data={data} setData={setData} /> */}
      </ContentWrapper>
    </Container>
  );
};

Announcement.layout = 'Contentlayout';
export default Announcement;
