import AnnouncementInfo from '@/shared/components/announcement/detail/AnnouncementInfo';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import { useRouter } from 'next/router';

const AnnouncementDetail = () => {
  const router = useRouter();
  return (
    <Container>
      <h2 className="fw-bold">공지사항</h2>
      <ContentWrapper>
        <Card>
          <Width
            width="50vw"
            padding="2rem"
            margin="0 auto"
            className="d-flex flex-column gap-3"
          >
            <AnnouncementInfo />
            <Flex justify="flex-end">
              <PrimaryButton onClick={() => router.push('/announcement')}>
                확인
              </PrimaryButton>
            </Flex>
          </Width>
        </Card>
      </ContentWrapper>
    </Container>
  );
};

AnnouncementDetail.layout = 'Contentlayout';
export default AnnouncementDetail;
