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
import { RiUserHeartLine } from 'react-icons/ri';

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
            <Link href="/profile" className="profile-wrapper">
              <RiUserHeartLine className="fs-5" />
            </Link>
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
