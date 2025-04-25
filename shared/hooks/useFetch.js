import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../redux/actions/action';
import { useRouter } from 'next/router';
import { useSwal } from './useSwal';

const useFetch = () => {
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const { warning, error } = useSwal();

  const expiredMessage =
    '<div>로그인이 만료되었습니다. </div><div>다시 로그인해주세요.</div>';
  const noAuthenticationMessage =
    '<div>로그인이 필요합니다. </div><div>다시 로그인해주세요.</div>';

  const loginAction = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        Accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const resultData = await res.json();
      resultData.dataStatus = res.status;
      return resultData;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const logoutAction = async (status) => {
    try {
      if (status) {
        await warning(
          '',
          '',
          status === 401 ? noAuthenticationMessage : expiredMessage,
        );
      }
      const res = await fetch('/auth/logout', {
        method: 'post',
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      data.status = res.status;

      return data;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      pathname !== '/' && push('/');
      // push('/');

      dispatch(LOGOUT_USER());
    }
  };
  const postAction = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: 'post',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: {
          ...(data instanceof FormData
            ? {}
            : { 'Content-Type': 'application/json' }),
        },
        credentials: 'include',
      });
      const resultData = await res.json();
      resultData.dataStatus = res.status;

      (res.status === 401 || res.detail === 'Signature has expired') &&
        logoutAction(res.status);

      return resultData;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const getAction = async (url) => {
    try {
      const res = await fetch(url, {
        method: 'get',
        Accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      data.dataStatus = res.status;
      (res.status === 401 || data.detail === 'Signature has expired') &&
        logoutAction();
      return data;
    } catch (err) {
      console.log(err);
      error('', '', '<div>데이터를 불러오지 못했습니다.</div>');
      return false;
    }
  };

  const putAction = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: 'put',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers:
          data instanceof FormData
            ? {}
            : { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const resultData = await res.json();
      console.log(resultData);
      resultData.dataStatus = res.status;
      // (res.status === 401 || data.detail === 'Signature has expired') &&
      //   logoutAction();
      return resultData;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const removeAction = async (url) => {
    try {
      const res = await fetch(url, {
        method: 'delete',
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      data.dataStatus = res.status;
      // (res.status === 401 || data.detail === 'Signature has expired') &&
      //   logoutAction();
      return data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return {
    loginAction,
    logoutAction,
    postAction,
    getAction,
    putAction,
    removeAction,
  };
};

export default useFetch;
