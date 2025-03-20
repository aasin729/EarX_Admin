import Seo from '@/shared/layout-components/seo/seo';
import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { HorizontalLine } from '@/shared/layout-components/styles/line';
import { InputWrapper } from '@/shared/layout-components/styles/input';
import { BoldText } from '@/shared/layout-components/styles/text';
import { PrimaryButton } from '@/shared/layout-components/styles/button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ScreenLoader from '@/shared/layout-components/spaces/ScreenLoader';

const ChangePassword = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [loading]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    // console.log('change password');
    setLoading(true);
    router.push('/dashboard');
  };
  return (
    <>
      <Seo title={'비밀번호 변경'} />
      {loading && <ScreenLoader />}
      <form onSubmit={handleChangePassword}>
        <Width width={'800px'} margin={'0 auto'}>
          <Flex
            justify={'center'}
            align={'center'}
            width={'100%'}
            height={'100vh'}
            direction={'column'}
            gap="0.5rem"
          >
            <Card>
              <h2 className="fw-bold">비밀번호 변경</h2>
              <div>사이트의 원활한 사용을 위해 비밀번호를 변경해 주세요​.</div>
              <Height height={'20px'} />
              <HorizontalLine />
              <Height height={'35px'} />
              <Flex>
                <Width width={'100px'}>
                  <BoldText>현재 비밀번호</BoldText>
                </Width>
                <InputWrapper type="password" name="current-password" />
              </Flex>
              <Height height={'0.5rem'} />
              <Flex>
                <Width width={'100px'}>
                  <BoldText>새 비밀번호</BoldText>
                </Width>
                <InputWrapper type="password" name="new-password" />
              </Flex>
              <Height height={'0.5rem'} />
              <Flex>
                <Width width={'100px'}>
                  <BoldText>새 비밀번호 확인</BoldText>
                </Width>
                <InputWrapper type="password" name="new-password-confirm" />
              </Flex>
              <Height height={'20px'} />
              <div>
                비밀번호는 숫자, 문자, 특수문자를 포함해 10자리 이상으로
                설정하여야 합니다.
              </div>
              <Height height={'40px'} />
              <HorizontalLine />
              <Height height={'20px'} />
              <PrimaryButton type={'submit'} className={'px-5'}>
                변경
              </PrimaryButton>
            </Card>
          </Flex>
        </Width>
      </form>
    </>
  );
};

export default ChangePassword;
