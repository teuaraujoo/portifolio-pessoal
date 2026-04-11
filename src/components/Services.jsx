import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgEsquerda from '../assets/images/imageEsquerda.webp';
import imgCentro from '../assets/images/imageCentro.webp';
import imgDireita from '../assets/images/imageDireita.webp';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    let isGapAnimationCompleted = false;
    let isFlipAnimationCompleted = false;

    const mm = gsap.matchMedia();

    // Mobile animation code
    mm.add("(max-width: 999px)", () => {
      gsap.set(".card, .card-container, .services-header h1", { clearProps: "all" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      tl.from('.services-header h1', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      })
        .from('.card', {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out'
        }, '-=0.3');

      return () => {
        tl.kill();
      };
    });

    // Desktop animation code
    mm.add("(min-width: 1000px)", () => {
      ScrollTrigger.create({
        id: 'services-scroll-trigger',
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * 4}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const stickyHeader = sectionRef.current.querySelector('.services-header h1');
          const cardContainer = sectionRef.current.querySelector('.card-container');

          if (!stickyHeader || !cardContainer) return;

          if (progress >= 0.1 && progress <= 0.25) {
            const headerProgress = gsap.utils.mapRange(0.1, 0.25, 0, 1, progress);
            const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
            const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);
            gsap.set(stickyHeader, { y: yValue, opacity: opacityValue });
          } else if (progress < 0.1) {
            gsap.set(stickyHeader, { y: 40, opacity: 0 });
          } else if (progress > 0.25) {
            gsap.set(stickyHeader, { y: 0, opacity: 1 });
          }

          if (progress <= 0.25) {
            const widthPercentage = gsap.utils.mapRange(0, 0.25, 75, 60, progress);
            gsap.set(cardContainer, { width: `${widthPercentage}%` });
          } else {
            gsap.set(cardContainer, { width: "60%" });
          }

          if (progress >= 0.35 && !isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: "20px", duration: 0.5, ease: "power3.out" });
            gsap.to(["#card-1", "#card-2", "#card-3"], { borderRadius: "20px", duration: 0.5, ease: "power3.out" });
            isGapAnimationCompleted = true;
          } else if (progress < 0.35 && isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: "0px", duration: 0.5, ease: "power3.out" });
            gsap.to('#card-1', { borderRadius: '20px 0 0 20px', duration: 0.5, ease: 'power3.out' });
            gsap.to('#card-2', { borderRadius: '0px', duration: 0.5, ease: 'power3.out' });
            gsap.to('#card-3', { borderRadius: '0 20px 20px 0', duration: 0.5, ease: 'power3.out' });
            isGapAnimationCompleted = false;
          }

          if (progress >= 0.7 && !isFlipAnimationCompleted) {
            gsap.to(".card", { rotationY: 180, duration: 0.75, ease: "power3.inOut", stagger: 0.1 });
            gsap.to(['#card-1', '#card-3'], { y: 30, rotationZ: (i) => [-10, 10][i], duration: 0.75, ease: "power3.inOut" });
            isFlipAnimationCompleted = true;
          } else if (progress < 0.7 && isFlipAnimationCompleted) {
            gsap.to(".card", { rotationY: 0, duration: 0.75, ease: "power3.inOut", stagger: -0.1 });
            gsap.to(['#card-1', '#card-3'], { y: 0, rotationZ: 0, duration: 0.75, ease: "power3.inOut" });
            isFlipAnimationCompleted = false;
          }
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="services-header">
        <h1 className="title services">Soluções Digitais Otimizadas</h1>
      </div>
      <div className="card-container">
        <div className="card" id="card-1">
          <div className="card-front">
            <img src={imgEsquerda} alt="Imagem Esquerda" />
          </div>
          <div className="card-back">
            <span>( 01 )</span>
            <p>Aplicações web</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ab in nemo laudantium nostrum corporis sint accusamus eveniet vero harum sunt
              cupiditate,
            </p>
          </div>
        </div>

        <div className="card" id="card-2">
          <div className="card-front">
            <img src={imgCentro} alt="Imagem Centro" />
          </div>
          <div className="card-back">
            <span>( 02 )</span>
            <p>Interactive Web Expirence</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ab in nemo laudantium nostrum corporis sint accusamus eveniet vero harum sunt
              cupiditate,
            </p>
          </div>
        </div>

        <div className="card" id="card-3">
          <div className="card-front">
            <img src={imgDireita} alt="Imagem Direita" />
          </div>
          <div className="card-back">
            <span>( 03 )</span>
            <p>Interactive Web Expirence</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ab in nemo laudantium nostrum corporis sint accusamus eveniet vero harum sunt
              cupiditate,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
