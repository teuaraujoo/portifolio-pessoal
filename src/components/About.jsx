import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 1000) {
      return undefined;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.about-title-container > *', {
      x: -36,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    })
      .from('.about-panel', {
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.about-highlight', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.45');

    return () => tl.kill();
  }, { scope: sectionRef });

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="section-ambient section-ambient-about" />

      <div className="about-container">
        <div className="about-title-container">
          <h1 className="title">Sobre mim</h1>
          <p>um pouco da minha trajetória</p>
        </div>

        <div className="about-panel">
          <div className="about-text-container">
            <h1>Transformando ideias em soluções digitais</h1>
            <p>
              Meu nome é Mateus Araujo, sou desenvolvedor full stack apaixonado por tecnologia e por diferentes tipos de soluções digitais.
              <br />
              <br />
              Não escrevo apenas código, meu objetivo é desenvolver experiências digitais que realmente façam diferença para seu negócio.
              <br />
              <br />
              Do design ao produto final, cuido de cada etapa do desenvolvimento para que sua presença online seja mais forte, mais estratégica e mais eficiente.
              <br />
              <br />
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight">
              <span>01</span>
              <strong>Interfaces com clareza visual</strong>
            </div>
            <div className="about-highlight">
              <span>02</span>
              <strong>Backend sólido e organizado</strong>
            </div>
            <div className="about-highlight">
              <span>03</span>
              <strong>Experiência moderna e performática</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
