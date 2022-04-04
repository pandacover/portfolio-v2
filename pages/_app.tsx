import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {(darkMode) => <Component {...pageProps} darkMode={darkMode} />}
    </Layout>)
}

export default MyApp
