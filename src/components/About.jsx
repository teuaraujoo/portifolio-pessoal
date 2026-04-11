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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quis tenetur accusamus
            tempore, adipisci nesciunt? Possimus omnis numquam odio itaque assumenda est libero ipsa officiis ipsam
            quidem! Necessitatibus, ipsa magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            quibusdam minima delectus quos possimus exercitationem aut deserunt sit maiores obcaecati iste.
            Fugiat, nesciunt minima eaque dolorem reprehenderit labore et alias.
          </p>
        </div>
      </div>
    </section>
  );
}
