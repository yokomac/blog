import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { basePath } from "../../next.config" // 追加
import Link from 'next/link';

const BASE_PATH = basePath ? basePath : "" // 追加

const Navigation = () => (
  <div className={styles.navi}>
    <div className={styles.naviContent}>
      <Link href="https://yokomac.github.io/blog/"> {/* リンク追加 */}
        <a>
          <Image
            src={`${BASE_PATH}/next.svg`} // 修正
            alt="self"
            width={85}
            height={85}
            className={styles.logo}
          />
        </a>
      </Link>
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
);

export default Navigation;