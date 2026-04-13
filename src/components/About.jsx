import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    tl.from('.about-title-container .title', {
      x: -40,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
      .from('.about-title-container p', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.about-text-container h1', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.about-text-container p', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-title-container">
          <h1 className="title">Sobre mim</h1>
          <p>um pouco da minha trajetória</p>
        </div>
        <div className="about-text-container">
          <h1>Transformando ideais em soluções digitais</h1>
          <p>
            Meu nome é Mateus Arajo, sou desenvolvedor full stack apaixonado por tecnologia e por transformar ideias em soluções reais.

            Atualmente, estou em constante evolução na área de desenvolvimento, buscando não apenas escrever código, mas criar experiências digitais que realmente façam diferença.

            Tenho experiência com tecnologias como JavaScript, React, Node.js, além de estar sempre explorando novas ferramentas e boas práticas do mercado.

            Meu foco é crescer como desenvolvedor, participar de projetos desafiadores e entregar soluções eficientes, bem estruturadas e com propósito.
          </p>
        </div>
      </div>
    </section>
  );
}
