import MonthWashingSettlement from '@/shared/components/report/MonthWashingSettlement';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const ReportManagement = () => {
  return (
    <Container>
      <h1 className="fw-bold">월별 세탁 정산 현황</h1>

      <ContentWrapper>
        <MonthWashingSettlement />
      </ContentWrapper>
    </Container>
  );
};

ReportManagement.layout = 'Contentlayout';
export default ReportManagement;
