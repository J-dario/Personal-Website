import Image from "next/image";
import Wave from 'react-wavify'
import styles from "./page.module.css";
import { SuffixPathnameNormalizer } from "next/dist/server/normalizers/request/suffix";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.backgroundClouds}/>

        <div className={styles.moonContainer}>
          <div className={styles.moonRing2}>
            <Image src="/Spokes.svg" alt="Spokes" width={800} height={800}/>
          </div>
          <div className={styles.moon}>
            <Image src="/Moon Center.svg" alt="Moon" width={600} height={600}/>
          </div>
          <div className={styles.moonRing1}>
            <Image src="/Moon Ring 1.svg" alt="MoonPhases" width={750} height={750}/>
          </div>
          <div className={styles.moonRing2}>
            <Image src="/Moon Ring 2.svg" alt="MoonPhases" width={900} height={900}/>
          </div>
        </div>

        <div className={styles.frontClouds}/>

        <div className={styles.waterContainer}>

          <div>
            <Wave fill='url(#waveOutline)' paused={false} options={{height: 95, amplitude: 15, speed: 0.15, points: 3}}>
              <defs>
                <linearGradient id="waveOutline">
                  <stop offset="0%"  stopColor="#484A77" />
                  <stop offset="25%" stopColor="#4D9BE6" />
                  <stop offset="50%" stopColor="#8FD3FF" />
                  <stop offset="75%" stopColor="#4D9BE6" />
                  <stop offset="100%"  stopColor="#484A77" />
                </linearGradient>
              </defs>
            </Wave>
          </div>

          <div className={styles.waterWave}>
            <Wave fill='url(#waveFill)' paused={false} options={{height: 100, amplitude: 15, speed: 0.15, points: 3}}>
              <defs>
                <linearGradient id="waveFill">
                  <stop offset="10%"  stopColor="#4D9BE6" />
                  <stop offset="20%" stopColor="#A884F3" />
                  <stop offset="40%"  stopColor="#C7DCD0" />
                  <stop offset="45%" stopColor="#DEDEDE" />
                  <stop offset="55%"  stopColor="#DEDEDE" />
                  <stop offset="60%" stopColor="#C7DCD0" />
                  <stop offset="80%"  stopColor="#A884F3" />
                  <stop offset="90%" stopColor="#4D9BE6" />
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