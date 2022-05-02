import Layout from "@layout/index";
import GlobalStyles from "@styles/globalStyles";
import { Provider } from "react-redux";
import store from "redux/gitHubStore";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
