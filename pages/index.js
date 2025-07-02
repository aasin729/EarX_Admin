import useFetch from '@/shared/hooks/useFetch';
import Seo from '@/shared/layout-components/seo/seo';
import { LOGIN_USER } from '@/shared/redux/actions/action';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import favicon from '../public/assets/img/brand/favicon.png';

let hasLoggedOut = false;
export default function Home() {
  const { logoutAction, loginAction } = useFetch();
  let navigate = useRouter();
  const { basePath } = useRouter();

  useEffect(() => {
    if (!hasLoggedOut) {
      logoutAction();
      hasLoggedOut = true; // 실행 상태 저장
    }
  }, []);

  useEffect(() => {
    if (document.body) {
      document.body.style.backgroundColor = '#000';
      document
        .querySelector('body')
        .classList.add('ltr', 'error-page1');
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.classList.remove('ltr', 'error-page1');
    };
  }, []);

  const [err, setError] = useState('');

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      ReactLogin();
    }
  };

  const [data, setData] = useState({
    email: '',
    password: '',
    user_type: '세탁업체',
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError('');
  };

  const routeChange = (first) => {
    // let path = first ? '/change-password' : `/dashboard`;
    let path = `/dashboard`;
    navigate.push(path);
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const ReactLogin = async () => {
    try {
      const response = await loginAction('/auth/login', data);
      console.log(response);

      if (response.dataStatus !== 200) {
        setError('이메일 또는 비밀번호를 확인하여 주십시오.');
      } else {
        setLoading(true);
        routeChange(response.user.is_first);
        dispatch(
          LOGIN_USER({
            email: data.email,
            role: response.user.user_type,
            id: response.user.id,
            name: response.user.username,
            company: response.user.company_info.name,
            phone: response.user.user_phone,
            companyId: response.user.company_info.id,
            access_token: response.access_token,
          }),
        );
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <>
      <Head>
        <title>EarX</title>
        <meta name="description" content="Spruha" />
        {/* <link rel="icon" href={favicon.src} /> */}
      </Head>
      <Seo title={'Login'} />
      {loading && <ScreenLoader />}
      {/* <div className="square-box">
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div>
      </div> */}

      <div className="page">
        <div className="page-single">
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
              >
                <div className="card-sigin">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      {/* <div className="d-flex mb-2">
                        <img
                          src={`${basePath}/assets/img/brand/logo.svg`}
                          className="sign-favicon"
                          alt="logo"
                        />
                      </div> */}
                      <div className="">
                        <div className="main-signup-header">
                          <div className="fs-3 fw-bold">
                            EarX 관리자 페이지
                          </div>
                          <h6 className="font-weight-semibold mb-4">
                            관리자 계정에 로그인하세요.
                          </h6>
                          <div className="panel panel-primary">
                            <div className="tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <Form action="#">
                                  <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                      className="form-control"
                                      placeholder="이메일 주소를 입력하세요."
                                      type="text"
                                      name="email"
                                      value={email}
                                      onChange={changeHandler}
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                      className="form-control"
                                      placeholder="비밀번호를 입력하세요."
                                      type="password"
                                      name="password"
                                      value={password}
                                      onChange={changeHandler}
                                      onKeyUp={handleEnter}
                                      required
                                    />
                                  </Form.Group>
                                  {err && <Alert variant="danger">{err}</Alert>}
                                  <Button
                                    onClick={ReactLogin}
                                    variant=""
                                    className="btn btn-primary btn-block custom-dark-btn"
                                  >
                                    Sign In
                                  </Button>
                                </Form>
                              </div>
                            </div>

                            <div className="panel-body tabs-menu-body border-0 p-3">
                              <div className="tab-content"></div>
                            </div>
                          </div>

                          {/* <div className="main-signin-footer text-center mt-3">
                            <p>
                              <Link href="" className="mb-3">
                                비밀번호를 잊으셨나요?
                              </Link>
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
