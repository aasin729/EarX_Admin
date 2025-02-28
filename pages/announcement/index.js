import AnnouncementTable from '@/shared/components/announcement/Announcement';
import { announcementKeys } from '@/shared/functions/keys';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { useState } from 'react';

const Announcement = () => {
  const [data, setData] = useState([
    {
      [announcementKeys.id]: 1,
      [announcementKeys.title]: '제목1',
      [announcementKeys.attachedFile]: '파일1',
      [announcementKeys.createdAt]: '2021-10-01',
    },
  ]);
  return (
    <Container>
      <h1 className="fw-bold">공지사항</h1>
      <ContentWrapper>
        <AnnouncementTable data={data} setData={setData} />
      </ContentWrapper>
    </Container>
  );
};

Announcement.layout = 'Contentlayout';
export default Announcement;
