import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Logo from "../components/Logo";
import Link from "next/link";
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/',
  cache: new InMemoryCache(),
});

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
      <header className={styles.header}>
        <div className={styles.search}>
          <Logo type="header" />
          <div />
        </div>
        <div className={styles.menu}>
          <Link href="/characters">
            Characters
          </Link>
        </div>
      </header>
      <ApolloProvider client={client}>
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
    </div>
  )
}
export default MyApp
