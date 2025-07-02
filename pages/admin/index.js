import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';
import AdminList from '@/shared/components/admin/AdminList';

const AdminPage = () => {
  return (
    <Container>
      <h1 className="fw-bold">관리자</h1>
      <ContentWrapper>
        <AdminList />
      </ContentWrapper>
    </Container>
  );
};

AdminPage.layout = 'Contentlayout';
export default AdminPage;
