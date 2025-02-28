const useFetch = () => {
  const postAction = async (url, data) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: 'post',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: {
          ...(userInfo.access_token && {
            Authorization: `Bearer ${userInfo.access_token}`,
          }),
          ...(data instanceof FormData
            ? {}
            : { 'Content-Type': 'application/json' }),
        },
      });
      const resultData = await res.json();
      resultData.status = res.status;

      // res.status === 401 && out();

      return resultData;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const getAction = async (url) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
      const data = await res.json();
      console.log(data);
      data.status = res.status;
      res.status === 401 && out();
      return data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const putAction = async (url, data) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: 'put',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers:
          data instanceof FormData
            ? {}
            : { 'Content-Type': 'application/json' },
      });
      const resultData = await res.json();
      console.log(resultData);
      resultData.status = res.status;
      res.status === 401 && out();
      return resultData;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const removeAction = async (url) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: 'delete',
      });
      const data = await res.json();
      console.log(data);
      data.status = res.status;
      res.status === 401 && out();
      return data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return {
    postAction,
    getAction,
    putAction,
    removeAction,
  };
};

export default useFetch;
