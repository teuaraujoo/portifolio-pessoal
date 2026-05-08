import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Preloader() {
  const preloaderRef = useRef(null);
  const orbRef = useRef(null);
  const pathRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const preloader = preloaderRef.current;
    const orb = orbRef.current;
    const path = pathRef.current;
    const progressBar = progressBarRef.current;

    if (!preloader || !orb || !path || !progressBar) {
      return undefined;
    }

    if (window.innerWidth < 1000) {
      setProgress(100);
      const timeoutId = window.setTimeout(() => {
        document.body.classList.add('preloader-complete');
        preloader.style.display = 'none';
      }, 250);

      return () => window.clearTimeout(timeoutId);
    }

    const totalLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    gsap.set(progressBar, {
      scaleX: 0,
      transformOrigin: 'left center',
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.classList.add('preloader-complete');
        ScrollTrigger.refresh();
      },
    });

    tl.fromTo(
      orb,
      { scale: 0.8, opacity: 0.4, rotate: -8 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.2 },
    )
      .to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1.7,
          ease: 'power2.inOut',
        },
        0.1,
      )
      .to(
        progressBar,
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power2.inOut',
          onUpdate: function onUpdate() {
            setProgress(Math.round(this.progress() * 100));
          },
        },
        0.15,
      )
      .to('.preloader-copy > *', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
      }, 0.25)
      .to(preloader, {
        opacity: 0,
        duration: 0.85,
        delay: 0.25,
        onComplete: () => {
          preloader.style.display = 'none';
        },
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="preloader-grid" />
      <div className="preloader-glow preloader-glow-left" />
      <div className="preloader-glow preloader-glow-right" />

      <div className="loader premium-loader">
        <div className="loader-orb" ref={orbRef}>
          <div className="loader-rings">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <svg id="animated-path" width="268" height="239" viewBox="0 0 268 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={pathRef}
              d="M3.26953 235.427L89.5322 9.42664L135.981 117.995M3.26953 235.427L135.981 64.8188L264.27 235.427M3.26953 235.427L135.981 117.995M135.981 117.995L184.642 9.42664L264.27 235.427M135.981 117.995L264.27 235.427"
              stroke="white"
              strokeWidth="7"
            />
          </svg>
        </div>

        <div className="preloader-copy">
          <span>carregando...</span>
          <strong>{progress}%</strong>
          <div className="preloader-progress-track">
            <span ref={progressBarRef}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
