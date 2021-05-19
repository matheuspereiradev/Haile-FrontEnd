import { Header } from '../components/header'
import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { HouseContextProvider } from './contexts/HousesContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.appWrapper}>
        <HouseContextProvider>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </HouseContextProvider>
      </div>
    </>
  )
}

export default MyApp
