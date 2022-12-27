import Layout from '../layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout title='Home'>
      <Component {...pageProps} />
    </Layout>
  );
}
