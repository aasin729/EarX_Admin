import { RiLoaderFill } from 'react-icons/ri';

const ScreenLoader = () => {
  return (
    <div className="loadingWrapper">
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <RiLoaderFill className="load-icon" />
      </div>
    </div>
  );
};

export default ScreenLoader;
