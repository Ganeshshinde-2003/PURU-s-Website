import Image from "next/image";
import styles from "./page.module.css";
import wwr from "../../../public/katthy-k-mal-FBX_qonbn5M-unsplash 1.png";
import Arroedownn from "../../../public/arrowdown.png";
import Approach from "../../../public/ricardo-gomez-angel-WsEAiVwGrwo-unsplash 1.png";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Our Story</p>
          <Image src={wwr} className={styles.image} alt="wwt" />
          <Link href="/purustories">
            <Image
            src={Arroedownn}
            alt="LOGO"
            className={styles.arrow}
          />
          </Link>
        </div>
        <div className={styles.content}>
          <p>Our Approach</p>
          <Image src={Approach} className={styles.image} alt="wwt" />
          <Link href="/purustories">
            <Image
            src={Arroedownn}
            alt="LOGO"
            className={styles.arrow}
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
