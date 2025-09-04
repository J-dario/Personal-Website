'use client';

import Image from "next/image";
import Wave from 'react-wavify'
import styles from "./page.module.css";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const audioRefs = {
    waves: useRef<HTMLAudioElement>(null),
    lofi: useRef<HTMLAudioElement>(null),
  };
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => {
      const isPlaying = !prev;
      Object.values(audioRefs).forEach((ref) => {
      
        if (audioRefs.lofi.current) {
          audioRefs.lofi.current.volume = 0.3;
        }
        
        if (ref.current) {
          ref.current.muted = isPlaying;
          if (!isPlaying) {
            const playPromise = ref.current.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.warn("Autoplay failed:", error);
              });
            }
          }
        }
      });
      return isPlaying;
    });
  };

  const [inSection1, setInSection1] = useState(true);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const section1Top = section1Ref.current?.getBoundingClientRect().top ?? 0;
      setInSection1(section1Top >= -window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection1 = () => {
    section1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Audio and UI */}
        <audio ref={audioRefs.waves} autoPlay preload="auto" loop muted><source src="waves.mp3" type="audio/mpeg" /></audio>
        <audio ref={audioRefs.lofi} autoPlay preload="auto" loop muted><source src="lofi.mp3" type="audio/mpeg" /></audio>
        <button onClick={toggleMute} className={styles.muteButton} aria-label="Toggle Mute"><Image src={muted ? "Volume X.svg" : "Volume Icon.svg"} alt={muted ? "Muted" : "Unmuted"} width={64} height={64}/></button>
        {inSection1 && (
          <button onClick={scrollToSection2} className={styles.downButton} aria-label="To Next Page">
            <Image src="Next.svg" alt="Next Page" width={64} height={64}/>
          </button>
        )}

        {!inSection1 && (
          <button onClick={scrollToSection1} className={styles.upButton} aria-label="To Previous Page">
            <Image src="Next.svg" alt="Previous Page" width={64} height={64}/>
          </button>
        )}


        {/* Landing Page */}
        <section className={styles.section} ref={section1Ref}>
          <div className={styles.content}>
            <div className={styles.backgroundClouds}/>
            <div className={styles.moonContainer}>
              <div className={styles.moonRing2}><Image src="Spokes.svg" alt="Spokes" width={800} height={800}/></div>
              <div className={styles.moon}><Image src="Moon Center.svg" alt="Moon" width={600} height={600}/></div>
              <div className={styles.moonRing1}><Image src="Moon Ring 1.svg" alt="MoonPhases" width={750} height={750}/></div>
              <div className={styles.moonRing2}><Image src="Moon Ring 2.svg" alt="MoonPhases" width={900} height={900}/></div>
            </div>
            <div className={styles.frontClouds}/>
            <div className={styles.textContainer}>
              <h1 className={styles.titleText}> Hi, I&apos;m Javier </h1>
              <h4 className={styles.subtitleText}> student, artist, developer </h4>
            </div>
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
          </div>
        </section>
        
        {/* Construction Page */}
        <section className={styles.section2} ref={section2Ref}>
          <div className={styles.content}>
            <div className={styles.textContainer2}>
              <br/>
              <h1 className={styles.titleText2}>Thanks for visiting!</h1>
              <br/><br/>
              <h4 className={styles.subtitleText2}>Check out these links to learn more about me!</h4>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/J-dario" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <Image src="githubIcon.svg" alt="GitHub" width={200} height={200} />
                <br/>
                <p>Check out my Github to see the repo for this and my other projects!</p>
              </a>
              <a href="https://www.linkedin.com/in/javier-ignacio-dario" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <Image src="linkedinIcon.svg" alt="LinkedIn" width={200} height={200} />
                <br/>
                <p>Learn more about me on Linkedin!</p>
              </a>
              <a href="https://goloob.itch.io" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <Image src="itchIcon.svg" alt="Itch.io" width={200} height={200} />
                <br/>
                <p>Play the games I&apos;ve made on Itch.io!</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}