import Users from '@/shared/components/users/Users';
import Container from '@/shared/layout-components/spaces/Container';
import ContentWrapper from '@/shared/layout-components/spaces/ContentWrapper';

const UsersPage = () => {
  return (
    <Container>
      <h1 className="fw-bold">사용자</h1>
      <ContentWrapper>
        <Users />
      </ContentWrapper>
    </Container>
  );
};

UsersPage.layout = 'Contentlayout';
export default UsersPage;
