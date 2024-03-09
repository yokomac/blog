import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/api";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yokomac Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://yokomac.github.io/blog/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Yokomac Blog</h1>

        <div className={styles.grid}>
          {allPosts.map((post) => (
            <a href={post.slug} className={styles.card} key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </a>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Powered by Next.js.</p>
      </footer>
    </div>
  );
};

export default Home;