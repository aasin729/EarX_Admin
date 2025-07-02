import Terms from '@/shared/components/terms/Terms';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const ReportManagement = () => {
  return (
    <Container>
      <h1 className="fw-bold">약관 및 개인정보 처리방침</h1>
      <ContentWrapper>
        <Terms />
      </ContentWrapper>
    </Container>
  );
};

ReportManagement.layout = 'Contentlayout';
export default ReportManagement;
