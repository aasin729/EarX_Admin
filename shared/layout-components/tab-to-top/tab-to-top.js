import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TabToTop = () => {
  const [BacktoTop, setBacktopTop] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBacktopTop('d-block');
      } else setBacktopTop('');
    });
  }, []);
  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: 'auto',
      //   smooth
    });
  };
  return (
    <div>
      <Link
        href="#!"
        id="back-to-top"
        onClick={screenup}
        className={`${BacktoTop}`}
      >
        <i className="las la-arrow-up"></i>
      </Link>
    </div>
  );
};

TabToTop.propTypes = {};

TabToTop.defaultProps = {};

export default TabToTop;
