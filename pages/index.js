import Head from 'next/head';
import { Inter } from 'next/font/google';
import favicon from '../public/assets/img/brand/favicon.png';
import styles from '@/styles/Home.module.scss';
import { Alert, Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Seo from '@/shared/layout-components/seo/seo';
import { auth } from '../shared/firebase/firebase';
import { useDispatch } from 'react-redux';
import { LOGIN_USER } from '@/shared/redux/actions/action';

export default function Home() {
  useEffect(() => {
    if (document.body) {
      document
        .querySelector('body')
        .classList.add('ltr', 'error-page1', 'bg-primary');
    }

    return () => {
      document.body.classList.remove('ltr', 'error-page1', 'bg-primary');
    };
  }, []);

  // Firebase
  const [err, setError] = useState('');
  const [data, setData] = useState({
    email: 'adminnextjs@gmail.com',
    password: '1234567890',
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError('');
  };
  let navigate = useRouter();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate.push(path);
  };

  const dispatch = useDispatch();

  const ReactLogin = (e) => {
    console.log(data);
    if (
      data.email == 'adminnextjs@gmail.com' &&
      data.password == '1234567890'
    ) {
      routeChange();
      dispatch(
        LOGIN_USER({
          email: data.email,
          password: data.password,
          role: '관리자',
          name: '이정재',
          company: '그린워싱',
        }),
      );
    } else {
      setError('The Auction details did not Match');
      setData({
        email: 'adminnextjs@gmail.com',
        password: '1234567890',
      });
    }
  };

  const [key, setKey] = useState('firebase');

  return (
    <>
      <Head>
        <title>Nowa</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <Seo title={'Login'} />
      <div className="square-box">
        {' '}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{' '}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{' '}
        <div></div> <div></div> <div></div>{' '}
      </div>

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
                      <div className="d-flex mb-2">
                        <img
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/img/brand/logo.svg`}
                          className="sign-favicon"
                          alt="logo"
                        />
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          <div className="fs-3 fw-bold">
                            RFID 물류관리 시스템
                          </div>
                          <h6 className="font-weight-semibold mb-4">
                            관리자 계정에 로그인하세요.
                          </h6>
                          <div className="panel panel-primary">
                            <div className="tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <Form action="#">
                                  <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>{' '}
                                    <Form.Control
                                      className="form-control"
                                      placeholder="Enter your email"
                                      type="text"
                                      name="email"
                                      value={email}
                                      onChange={changeHandler}
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>{' '}
                                    <Form.Control
                                      className="form-control"
                                      placeholder="Enter your password"
                                      type="password"
                                      name="password"
                                      value={password}
                                      onChange={changeHandler}
                                      required
                                    />
                                  </Form.Group>
                                  {err && <Alert variant="danger">{err}</Alert>}
                                  <Button
                                    onClick={ReactLogin}
                                    variant=""
                                    className="btn btn-primary btn-block"
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

                          <div className="main-signin-footer text-center mt-3">
                            <p>
                              <Link href="" className="mb-3">
                                비밀번호를 잊으셨나요?
                              </Link>
                            </p>
                          </div>
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
