import React, { useState } from 'react';
import { Navbar, Dropdown, Badge, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { DefaultButton } from '../styles/button';
import Modal from '@/shared/components/Modal';
import { useSwal } from '@/shared/hooks/useSwal';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from '@/shared/redux/actions/action';

export default function Header() {
  let { basePath, push } = useRouter();

  const user = useSelector((state) => state.User);

  const { confirm } = useSwal();
  const dispatch = useDispatch();

  return (
    <Navbar className="main-header side-header sticky nav nav-item">
      <div className="main-container container-fluid">
        <div className="ms-auto me-4">
          <div className="main-header-right">
            <div className="d-flex align-items-center gap-2 me-2">
              {user.company} <Badge>{user.role}</Badge> {user.name}님
              환영합니다.
            </div>
            <Dropdown className="main-profile-menu nav nav-item nav-link ps-lg-2">
              <Dropdown.Toggle
                className="new nav-link profile-user d-flex"
                variant=""
              >
                <img
                  alt="프로필사진"
                  src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/img/faces/2.jpg`}
                  className=""
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="menu-header-content p-3 border-bottom">
                  <div className="d-flex wd-100p">
                    <div className="main-img-user">
                      <img
                        alt=""
                        src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/img/faces/2.jpg`}
                        className=""
                      />
                    </div>
                    <div className="ms-3 my-auto">
                      <h6 className="tx-15 font-weight-semibold mb-0">
                        Teri Dactyl
                      </h6>
                      <span className="dropdown-title-text subtext op-6  tx-12">
                        Premium Member
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="dropdown-item"
                  href={`/components/pages/profile/`}
                >
                  <i className="far fa-user-circle"></i>Profile
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/components/pages/mail/chat/`}
                >
                  <i className="far fa-smile"></i> chat
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/components/pages/mail/read-mail/`}
                >
                  <i className="far fa-envelope "></i>Inbox
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/components/pages/mail/mail/`}
                >
                  <i className="far fa-comment-dots"></i>Messages
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/components/pages/settings/`}
                >
                  <i className="far fa-sun"></i> Settings
                </Link>
                <Link className="dropdown-item" href="/">
                  <i className="far fa-arrow-alt-circle-left"></i> Sign Out
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <DefaultButton
              onClick={() => {
                confirm('로그아웃', '로그아웃 하시겠습니까?').then((result) => {
                  if (result.isConfirmed) {
                    console.log('로그아웃');
                    dispatch(LOGOUT_USER());
                    push('/');
                  }
                });
              }}
            >
              <FiLogOut className="fw-bolder fs-5 ms-3" />
            </DefaultButton>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
