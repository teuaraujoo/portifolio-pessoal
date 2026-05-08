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

    mm.add('(min-width: 1000px)', () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * 4}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const stickyHeader = sectionRef.current.querySelector('.services-header-inner');
          const cardContainer = sectionRef.current.querySelector('.card-container');

          if (!stickyHeader || !cardContainer) return;

          if (progress >= 0.08 && progress <= 0.24) {
            const headerProgress = gsap.utils.mapRange(0.08, 0.24, 0, 1, progress);
            gsap.set(stickyHeader, {
              y: gsap.utils.mapRange(0, 1, 44, 0, headerProgress),
              opacity: gsap.utils.mapRange(0, 1, 0, 1, headerProgress),
            });
          } else if (progress < 0.08) {
            gsap.set(stickyHeader, { y: 44, opacity: 0 });
          } else {
            gsap.set(stickyHeader, { y: 0, opacity: 1 });
          }

          if (progress <= 0.26) {
            const widthPercentage = gsap.utils.mapRange(0, 0.26, 78, 64, progress);
            gsap.set(cardContainer, { width: `${widthPercentage}%` });
          } else {
            gsap.set(cardContainer, { width: '64%' });
          }

          if (progress >= 0.36 && !isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: '20px', duration: 0.5, ease: 'power3.out' });
            gsap.to(['#card-1', '#card-2', '#card-3'], {
              borderRadius: '26px',
              duration: 0.5,
              ease: 'power3.out',
            });
            isGapAnimationCompleted = true;
          } else if (progress < 0.36 && isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: '0px', duration: 0.45, ease: 'power3.out' });
            gsap.to('#card-1', { borderRadius: '26px 0 0 26px', duration: 0.45, ease: 'power3.out' });
            gsap.to('#card-2', { borderRadius: '0px', duration: 0.45, ease: 'power3.out' });
            gsap.to('#card-3', { borderRadius: '0 26px 26px 0', duration: 0.45, ease: 'power3.out' });
            isGapAnimationCompleted = false;
          }

          if (progress >= 0.68 && !isFlipAnimationCompleted) {
            gsap.to('.card', { rotationY: 180, duration: 0.9, ease: 'power3.inOut', stagger: 0.08 });
            gsap.to(['#card-1', '#card-3'], {
              y: 24,
              rotationZ: (index) => [-7, 7][index],
              duration: 0.9,
              ease: 'power3.inOut',
            });
            isFlipAnimationCompleted = true;
          } else if (progress < 0.68 && isFlipAnimationCompleted) {
            gsap.to('.card', { rotationY: 0, duration: 0.9, ease: 'power3.inOut', stagger: -0.08 });
            gsap.to(['#card-1', '#card-3'], { y: 0, rotationZ: 0, duration: 0.9, ease: 'power3.inOut' });
            isFlipAnimationCompleted = false;
          }
        },
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="section-ambient section-ambient-services" />

      <div className="services-header">
        <div className="services-header-inner">
          <h1 className="title services">Como posso te ajudar?</h1>
        </div>
      </div>

      <div className="card-container">
        <div className="card" id="card-1">
          <div className="card-front">
            <img src={imgEsquerda} alt="Sites modernos e profissionais" />
            <div className="card-front-overlay" />
          </div>
          <div className="card-back">
            <span>( 01 )</span>
            <p>Sites modernos e profissionais</p>
            <p className="description">
              Desenvolvimento de sites modernos, rápidos e responsivos, focados na melhor experiência do usuário para fortalecer a presença online e transmitir mais profissionalismo para o negócio.
            </p>
          </div>
        </div>

        <div className="card" id="card-2">
          <div className="card-front">
            <img src={imgCentro} alt="Sistemas para otimizar o seu negócio" />
            <div className="card-front-overlay" />
          </div>
          <div className="card-back">
            <span>( 02 )</span>
            <p>Sistemas para otimizar o seu negócio</p>
            <p className="description">
              Desenvolvo sistemas personalizados que ajudam a organizar operações, automatizar processos e aumentar a eficiência do negócio, reduzindo erros e economizando tempo.
            </p>
          </div>
        </div>

        <div className="card" id="card-3">
          <div className="card-front">
            <img src={imgDireita} alt="Soluções completas" />
            <div className="card-front-overlay" />
          </div>
          <div className="card-back">
            <span>( 03 )</span>
            <p>Soluções completas</p>
            <p className="description">
              Cuido de todo o processo de desenvolvimento, da ideia até a aplicação pronta, criando soluções digitais funcionais, intuitivas e preparadas para crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
