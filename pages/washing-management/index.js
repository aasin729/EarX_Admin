import Washing from '@/shared/components/washing/Washing';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const WashingManagement = () => {
  return (
    <Container>
      <h1 className="fw-bold">세탁 관리</h1>
      <ContentWrapper>
        <Washing />
      </ContentWrapper>
    </Container>
  );
};

WashingManagement.layout = 'Contentlayout';
export default WashingManagement;
