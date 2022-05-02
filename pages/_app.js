import Layout from "@layout/index";
import GlobalStyles from "@styles/globalStyles";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
