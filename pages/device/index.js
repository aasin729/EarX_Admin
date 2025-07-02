import Calculation from '@/shared/components/calc/Calculation';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const CalcManagement = () => {
  return (
    <Container>
      <h1 className="fw-bold">디바이스</h1>
      <ContentWrapper>
        {/* <Calculation /> */}
      </ContentWrapper>
    </Container>
  );
};

CalcManagement.layout = 'Contentlayout';
export default CalcManagement;
