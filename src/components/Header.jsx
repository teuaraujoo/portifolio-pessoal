import { useRef, useState} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  useGSAP(() => {

    if (window.innerWidth < 1000) {
      return undefined;
    };

    gsap.fromTo(
      navbarRef.current,
      {
        y: -22,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 1.5,
      },
    );

    gsap.to(navbarRef.current, {
      background: 'rgba(19, 18, 18, 0.78)',
      padding: '16px 24px',
      gap: 70,
      borderRadius: '24px',
      borderColor: 'rgba(255,255,255,0.08)',
      boxShadow: '0 24px 80px rgba(0, 0, 0, 0.38)',
      backdropFilter: 'blur(22px)',
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.home-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return (
    <header>
      <div className="logo-mobile">
        <a href="#home" onClick={closeMenu}>
          <svg width="30" height="30" viewBox="0 0 268 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.26953 235.427L89.5322 9.42664L135.981 117.995M3.26953 235.427L135.981 64.8188L264.27 235.427M3.26953 235.427L135.981 117.995M135.981 117.995L184.642 9.42664L264.27 235.427M135.981 117.995L264.27 235.427"
              stroke="white" strokeWidth="7" />
          </svg>
        </a>
      </div>
      <input type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} />
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
          <li><a className="ancora" href="#home" onClick={closeMenu}>Home</a></li>
          <li><a className="ancora" href="#services" onClick={closeMenu}>Serviços</a></li>
          <li><a className="ancora" href="#projects" onClick={closeMenu}>Projetos</a></li>
          <li><a className="ancora" href="#about" onClick={closeMenu}>Sobre</a></li>
          <li><a className="ancora" href="#contact" onClick={closeMenu}>Contato</a></li>
        </ul>
        <div className="header-button">
          <a
            href="https://api.whatsapp.com/send/?phone=5579988081797&text&type=phone_number&app_absent=0"
            className="primary-btn header"
            target="_blank"
            onClick={closeMenu}
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
