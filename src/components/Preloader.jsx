import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Preloader() {
  const pathRef = useRef(null);
  const preloaderRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    if (!path) return;

    gsap.set(path, {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength()
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 9,
      ease: "power2.out"
    });

    const minTime = 1500;
    const startTime = Date.now();
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minTime - elapsed);

    setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none';
            }
            ScrollTrigger.refresh();
          }
        });
      }
    }, remaining);
  });

  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="loader">
        <svg id="animated-path" width="268" height="239" viewBox="0 0 268 239" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M3.26953 235.427L89.5322 9.42664L135.981 117.995M3.26953 235.427L135.981 64.8188L264.27 235.427M3.26953 235.427L135.981 117.995M135.981 117.995L184.642 9.42664L264.27 235.427M135.981 117.995L264.27 235.427"
            stroke="white" strokeWidth="7" />
        </svg>
      </div>
    </div>
  );
}
