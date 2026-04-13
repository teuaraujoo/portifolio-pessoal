import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const navbarRef = useRef(null);

  useGSAP(() => {
    gsap.to(navbarRef.current, {
      background: "linear-gradient(180deg, #1a1a1e 0%, #111115 100%)",
      padding: "20px 30px",
      gap: 80,
      borderRadius: "20px",
      border: "1px solid #3d3d3d3e",
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".home-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  return (
    <header>
      <div className="logo-mobile">
        <a href="#home">
          <svg width="30" height="30" viewBox="0 0 268 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.26953 235.427L89.5322 9.42664L135.981 117.995M3.26953 235.427L135.981 64.8188L264.27 235.427M3.26953 235.427L135.981 117.995M135.981 117.995L184.642 9.42664L264.27 235.427M135.981 117.995L264.27 235.427"
              stroke="white" strokeWidth="7" />
          </svg>
        </a>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="navbar" ref={navbarRef}>
        <div className="logo">
          <a href="#home">
            <svg width="30" height="30" viewBox="0 0 268 239" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.26953 235.427L89.5322 9.42664L135.981 117.995M3.26953 235.427L135.981 64.8188L264.27 235.427M3.26953 235.427L135.981 117.995M135.981 117.995L184.642 9.42664L264.27 235.427M135.981 117.995L264.27 235.427"
                stroke="white" strokeWidth="7" />
            </svg>
          </a>
        </div>
        <ul>
          <li><a className="ancora" href="#home">Home</a></li>
          <li><a className="ancora" href="#services">Serviços</a></li>
          <li><a className="ancora" href="#projects">Projetos</a></li>
          <li><a className="ancora" href="#about">Sobre</a></li>
          <li><a className="ancora" href="#contact">Contato</a></li>
        </ul>
        <div className="header-button">
          <a
            href="https://api.whatsapp.com/send/?phone=5579988081797&text&type=phone_number&app_absent=0"
            className="primary-btn header"
            target="_blank"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
