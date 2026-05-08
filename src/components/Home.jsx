import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stackItems = [
  ['devicon-git-plain', 'Git'],
  ['devicon-html5-plain', 'HTML'],
  ['devicon-css3-plain', 'CSS'],
  ['devicon-javascript-plain', 'JavaScript'],
  ['devicon-typescript-plain', 'TypeScript'],
  ['devicon-react-original', 'React.js'],
  ['devicon-express-original', 'Express'],
  ['devicon-nodejs-plain-wordmark', 'Node.js'],
  ['devicon-mysql-original', 'MySQL'],
];

function StackTrack({ hidden = false }) {
  return (
    <div aria-hidden={hidden} className="stacks-track">
      {stackItems.map(([icon, label]) => (
        <div className="stack" key={`${label}-${hidden ? 'clone' : 'main'}`}>
          <i className={icon}></i>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

function SplitText({ as: Tag = 'span', text, className }) {
  return (
    <Tag className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${text}-${index}`}
          className={`split-char${char === ' ' ? ' space' : ''}`}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}

export default function Home() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to('.home-split .split-char', {
      opacity: 1,
      y: 0,
      rotationX: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      stagger: 0.025,
      ease: 'power3.out',
    })
      .from('.hero-kicker', {
        opacity: 0,
        x: -24,
        filter: 'blur(5px)',
        duration: 0.9,
        ease: 'power3.out',
      }, '-=1')
      .from('h1', {
        opacity: 0,
        y: 24,
        filter: 'blur(5px)',
        duration: 0.9,
        ease: 'power3.out',
      }, '-=1')
      .from('.hero-description', {
        opacity: 0,
        y: 24,
        filter: 'blur(10px)',
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.55')
      .from('.home-button .primary-btn', {
        opacity: 0,
        y: 18,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-side-panel', {
        opacity: 0,
        x: 18,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.stacks-shell', {
        opacity: 0,
        y: 24,
        filter: 'blur(10px)',
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.75')
  }, { scope: sectionRef })


  return (
    <section id="home" ref={sectionRef}>
      <div className="hero-ambient">
      </div>

      <div className="home-container">
        <div className="home-hero-copy">
          <div className="hero-kicker">
            <span className="hero-kicker-line" />
            <span>Portfolio pessoal</span>
          </div>

          <div className="title-container">
            <div className="location-tag">
              <p className="digitando">
                <i className="fa-solid fa-location-dot"></i>Aracaju, Sergipe
              </p>
            </div>
            <SplitText as="h1" text="Mateus Araujo" className="home-split" />
            <SplitText as="h2" text="FullStack Developer" className="home-split" />
            <p className="hero-description">
              Desenvolvo soluções digitais completas que atraem clientes e facilitam a gestão do seu negócio. Busco sempre unir performance, organização e uma experiência intuitiva para o usuário.
            </p>
          </div>

          <div className="home-button">
            <a
              className="primary-btn"
              href="https://wa.me/5579988081797?text=Ol%C3%A1%2C%20Mateus%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              target='_blank'
            >
              Orçamento
            </a>
            <a className="primary-btn outline" href="#projects">
              Projetos
            </a>
          </div>
        </div>

        <aside className="hero-side-panel">
          <div className="hero-panel-card">
            <span className="hero-panel-label">Focus</span>
            <strong>Do conceito a entrega final</strong>
            <p>Fale sobre suas ideias, seus clientes, o que você almeja e eu te ajudo a levar seu negócio para o próximo nível.</p>
          </div>
          <div className="hero-panel-card">
            <span className="hero-panel-label">Stack</span>
            <strong>Full stack de verdade</strong>
            <p>
              código limpo, arquitetura sólida e entrega ponta a ponta</p>
          </div>
        </aside>

        <div className="stacks-shell">
          <div className="stacks-header">
            <span>Tecnologias que utilizo</span>
          </div>
          <div className="stacks-container">
            <StackTrack />
            <StackTrack hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
