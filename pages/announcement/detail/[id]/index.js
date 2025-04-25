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
import { useState } from 'react';

const AnnouncementDetail = () => {
  const router = useRouter();
  const [data] = useState({
    title: '2025년 호텔 린넨류 세탁 서비스 가격 조정 안내',
    createdAt: '2025-03-19',
    content: `안녕하세요.
    
2025년 호텔 린넨류 세탁 서비스 가격이 다음과 같이 조정됨을 안내드립니다.

1. 조정 사유
- 원자재 가격 상승
- 인건비 상승
- 물류비용 증가

2. 적용 시기
- 2025년 4월 1일부터

3. 주요 변경 사항
- 기본 세탁 요금 8% 인상
- 특수 세탁 요금 10% 인상

자세한 내용은 첨부된 문서를 참고해 주시기 바랍니다.`,
    attachedFile: '2025_price_adjustment.pdf',
  });

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
            <AnnouncementInfo data={data} />
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
