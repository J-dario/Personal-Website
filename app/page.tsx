import Image from "next/image";
import Wave from 'react-wavify'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.moon}>
          <Image src="/Moon.svg" alt="Moon" width={600} height={600}/>
          <div className={styles.waterOutline}><Wave fill='#323353' paused={false} options={{height: 100, amplitude: 20, speed: 0.15, points: 3}}/></div>
          <div className={styles.waterWave}>
            <Wave fill='url(#gradient)' paused={false} options={{height: 100, amplitude: 20, speed: 0.15, points: 3}}>
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%"  stopColor="#323353" />
                  <stop offset="8%" stopColor="#484A77" />
                  <stop offset="19%"  stopColor="#4D65B4" />
                  <stop offset="34%" stopColor="#A884F3" />
                  <stop offset="64%"  stopColor="#A884F3" />
                  <stop offset="81%" stopColor="#4D65B4" />
                  <stop offset="90%"  stopColor="#484A77" />
                  <stop offset="100%" stopColor="#323353" />
                </linearGradient>
              </defs>
            </Wave>
          </div>
          <div className={styles.waterFill}></div>
        </div>
      </main>
    </div>
  );
}