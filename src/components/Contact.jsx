import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    tl.from('.title.contact', {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }).from('.tag-socials', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <h1 className="title contact">Contatos</h1>
      <div className="socials-container">
        <a href="mailto:empresarial.mateus25@gmail.com" target="_blank" rel="noreferrer" className="tag-socials">
          <div className="socials">
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p className="subtitle-socials">empresarial.mateus25@gmail.com</p>
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
      </div>
    </section>
  );
}
