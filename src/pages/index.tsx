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
    <div className={styles.wrapper}>
      <Head>
        <title>Yokomac Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog/favicon.ico" sizes="any" />
      </Head>
      <div className={styles.navi}>
        <a href="https://yokomac.github.io/blog/">
          <Image
            src={`${BASE_PATH}/next.svg`} // 修正
            alt="self"
            width={85}
            height={85}
            className={styles.logo}
          />
        </a>
        <h4>TAKUTO YOKOMAKU</h4>
        <p className={styles.description}>
          I am a web developer focusing on front-end development.
          Always hungry to keep learning.
        </p>
        <div className="contact">
          <hr/>
          <a href="https://github.com/yokomac/">
            <Image
              src={`${BASE_PATH}/github-mark.svg`}
              alt="github"
              width={20}
              height={20}
              className={styles.logo}
            />
          </a>
          <a href="https://instagram.com/make_maku/">
            <Image
              src={`${BASE_PATH}/instagram.svg`}
              alt="instagram"
              width={20}
              height={20}
              className={styles.logo}
            />
          </a>
          <a href="https://x.com/maku_make/">
            <Image
              src={`${BASE_PATH}/x-logo.svg`}
              alt="x"
              width={20}
              height={20}
              className={styles.logo}
            />
          </a>
          <a href="">
            <Image
              src={`${BASE_PATH}/facebook.svg`}
              alt="facebook"
              width={20}
              height={20}
              className={styles.logo}
            />
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>

          <h1 className={styles.title}>Blog.</h1>

          <div className={styles.grid}>
            {allPosts.map((post) => (
              <a href={post.slug} className={styles.card} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </a>
            ))}
          </div>
          <footer className={styles.footer}>
            <p className={styles.footertext}>Powered by Next.js.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;