import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/api";
import Image from 'next/image'

type Props = InferGetStaticPropsType<typeof getStaticProps>;

//const dir = String(process.env.BACKEND_URL)

import { basePath } from "../../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

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
        <link rel="icon" href="/blog/favicon.ico" sizes="any" />
      </Head>

      <main className={styles.main}>
      <Image
          src={`${BASE_PATH}/ron.png`} // 修正
          alt="ron"
          width={100}
          height={100}
        />
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