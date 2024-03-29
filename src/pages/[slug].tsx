import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import Image from 'next/image'
// import Navigation from '../component/navigation';
import { basePath } from "../../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

type Props = InferGetStaticPropsType<typeof getStaticProps>;

// 記事のパスを取得する

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

// 記事の内容を取得する
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "content"]);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Yokomac Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog/favicon.ico" sizes="any" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.navi}>
          <div className={styles.naviContent}>
            <a href="https://yokomac.github.io/blog/">
              <Image
                src={`${BASE_PATH}/next.svg`} // 修正
                alt="self"
                width={85}
                height={85}
                className={styles.logo}
              />
            </a>
            <h4 className={styles.name}>TAKUTO YOKOMAKU</h4>
            <p className={styles.description}>
              I am a web developer focusing on front-end development.
            </p>
          </div>
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
        <main className={styles.main}>
          <article className={styles.post}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div className={styles.post}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
          <footer className={styles.footer}>
            <p>Powered by Next.js.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Post;
