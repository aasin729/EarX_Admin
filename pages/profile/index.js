import { typingOnlyNumber } from '@/shared/functions/functions';
import Container from '@/shared/layout-components/spaces/Container';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import { InputWrapper } from '@/shared/layout-components/styles/input';
import { HorizontalLine } from '@/shared/layout-components/styles/line';
import { BoldText } from '@/shared/layout-components/styles/text';
import { useSelector } from 'react-redux';

const Profile = () => {
  const handleChangeMyInfo = (e) => {
    e.preventDefault();
  };

  const user = useSelector((state) => state.User);
  return (
    <Container>
      <Card>
        <Height height={'60px'} />
        <form onSubmit={handleChangeMyInfo}>
          <Width width={'800px'} margin={'0 auto'}>
            <h2 className="m-0 fw-bold text-center">내 정보</h2>
            <Flex
              justify={'center'}
              align={'flex-start'}
              width={'100%'}
              direction={'column'}
              gap="0.5rem"
            >
              <Height height={'20px'} />
              <HorizontalLine />
              <Height height={'35px'} />{' '}
              <Flex padding={'0.5rem 0'}>
                <Width width={'150px'}>
                  <BoldText>이름</BoldText>
                </Width>
                {user.name}
              </Flex>
              <Flex padding={'0.5rem 0'}>
                <Width width={'150px'}>
                  <BoldText>소속 업체</BoldText>
                </Width>
                {user.company} | {user.role}
              </Flex>
              <Flex padding={'0.5rem 0'}>
                <Width width={'150px'}>
                  <BoldText>이메일 주소(아이디)</BoldText>
                </Width>
                {user.email}
              </Flex>
              <Flex>
                <Width width={'150px'}>
                  <BoldText>현재 비밀번호</BoldText>
                </Width>
                <InputWrapper type="password" name="current-password" />
              </Flex>
              <Flex>
                <Width width={'150px'}>
                  <BoldText>새 비밀번호</BoldText>
                </Width>
                <InputWrapper type="password" name="new-password" />
              </Flex>
              <Flex>
                <Width width={'150px'}>
                  <BoldText>새 비밀번호 확인</BoldText>
                </Width>
                <InputWrapper type="password" name="new-password-confirm" />
              </Flex>
              <Flex className="fs-12">
                <Width width={'150px'} />
                비밀번호는 숫자, 문자, 특수문자를 포함해 10자리 이상으로
                설정하여야 합니다.
              </Flex>
              <Flex>
                <Width width={'150px'}>
                  <BoldText>휴대전화번호</BoldText>
                </Width>
                <InputWrapper
                  name="phone-number"
                  defaultValue={user.phone}
                  onKeyUp={typingOnlyNumber}
                />
              </Flex>
              <Height height={'40px'} />
              <HorizontalLine />
              <Height height={'20px'} />
            </Flex>
            <Flex justify={'center'} align={'center'}>
              <PrimaryButton type={'submit'} className={'px-5'}>
                변경
              </PrimaryButton>
            </Flex>
          </Width>
        </form>
      </Card>
    </Container>
  );
};

Profile.layout = 'Contentlayout';
export default Profile;
