import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cvFile from '../assets/data/Currículo - Mateus Araujo PT-BR.pdf?url';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);


  useGSAP(() => {
    if (window.innerWidth < 1000) {
      return undefined;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 74%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.contact-heading > *', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    }).from('.tag-socials', {
      y: 42,
      opacity: 0,
      duration: 0.75,
      stagger: 0.14,
      ease: 'power3.out',
    }, '-=0.35');

    return () => tl.kill();
  }, { scope: sectionRef });

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="section-ambient section-ambient-contact" />

      <div className="contact-heading">
        <span className="section-label">Contato</span>
        <h1 className="title contact">Contatos</h1>
        <p>Vamos transformar uma ideia em uma experiência digital clara, moderna e bem construída.</p>
      </div>

      <div className="socials-container">
        <a href="mailto:empresarial.mateus25@gmail.com" target="_blank" rel="noreferrer" className="tag-socials">
          <div className="socials">
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p className="subtitle-socials email">empresarial.mateus25@gmail.com</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/teuaraujoo/" target="_blank" rel="noreferrer" className="tag-socials">
          <div className="socials">
            <i className="fa-brands fa-linkedin"></i>
            <p>LinkedIn</p>
            <p className="subtitle-socials">@teuraujo</p>
          </div>
        </a>
        <a href="https://github.com/teuaraujoo" target="_blank" rel="noreferrer" className="tag-socials">
          <div className="socials">
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
            <p className="subtitle-socials">@teuaraujoo</p>
          </div>
        </a>
        <a href="https://wa.me/5579988081797" target="_blank" rel="noreferrer" className="tag-socials">
          <div className="socials">
            <i className="fa-brands fa-whatsapp"></i>
            <p>Telefone</p>
            <p className="subtitle-socials">(79) 98808-1797</p>
          </div>
        </a>
        <a
          download="Currículo - Mateus Araujo"
          href={cvFile}
          target="_blank"
          rel="noreferrer"
          className="tag-socials"
        >
          <div className="socials">
            <i className="fa-solid fa-file"></i>
            <p>Currículo</p>
            <p className="subtitle-socials">Baixar currículo</p>
          </div>
        </a>
      </div>
    </section>
  );
}
