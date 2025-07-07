import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.four04}>
                    <div className={styles.moonContainer}>
                        <div><Image src="Moon Center.svg" alt="Moon" width={400} height={400}/></div>
                    </div>
                    <h2 className={styles.four}>4&nbsp;&nbsp;&nbsp;&nbsp;4</h2>
                </div>
                <Link href="/">
                  <p className={styles.four04TxT}>Take me back</p>
                </Link>
            </main>
        </div>
    );
}