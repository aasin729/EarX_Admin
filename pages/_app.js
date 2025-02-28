import '../styles/globals.scss';
import Contentlayout from '../shared/layout-components/layout/content-layout';
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout';
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Provider } from 'react-redux';
import store, { persistor } from '@/shared/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import ScreenLoader from '@/shared/layout-components/spaces/ScreenLoader';

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Authenticationlayout: Authenticationlayout,
};
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    loading
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [loading]);

  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => <Component>{pageProps}</Component>);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          {loading && <ScreenLoader />}
          {/* <SSRProvider> */}

          <Component {...pageProps} />
          {/* </SSRProvider> */}
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
