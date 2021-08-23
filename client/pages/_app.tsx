import '../styles/globals.css'
import HistoryProvider from "../Providers/History";
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Logo from "../components/Logo";
import Menu from "../components/common/Menu";
import CharacterSearchProvider from "../Providers/CharacterSearch";
import CharacterSearch from "../components/common/CharacterSearch";
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import ApolloClient from "../graphql/ApolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars - GraphQL API Showcase</title>
        <meta name="description" content="Star Wars Fansite using GraphQL Api" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <HistoryProvider>
        <CharacterSearchProvider>
          <header className={styles.header}>
            <div className={styles.search}>
              <Logo type="header" />
              <CharacterSearch />
            </div>
            <Menu />
          </header>
          <ApolloProvider client={ApolloClient}>
            <main className={styles.main}>
              <Component {...pageProps} />
            </main>
          </ApolloProvider>
          <footer className={styles.footer}>
            <Logo type="footer" />
            <span className={styles.logo}>
              © Powered by Darío LM
            </span>
          </footer>
        </CharacterSearchProvider>
      </HistoryProvider>
    </div>
  )
}
export default MyApp
