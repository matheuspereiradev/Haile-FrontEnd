import { Header } from '../components/header'
import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { FiltersContextProvider } from './contexts/FiltersContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.appWrapper}>
        <FiltersContextProvider>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </FiltersContextProvider>
      </div>
    </>
  )
}

export default MyApp
