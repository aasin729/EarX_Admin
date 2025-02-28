import Order from '@/shared/components/order/Order';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const OrderManagement = () => {
  return (
    <Container>
      <h1 className="fw-bold">주문 관리</h1>
      <ContentWrapper>
        <Order />
      </ContentWrapper>
    </Container>
  );
};

OrderManagement.layout = 'Contentlayout';
export default OrderManagement;
