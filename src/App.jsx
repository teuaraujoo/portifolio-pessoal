import { useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import AnimatedCursor from './components/AnimatedCursor';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import atletaPortfolioVideo from './assets/videos/atletaPortfolio.mp4';
import sistemaEstoqueVideo from './assets/videos/sistemaEstoque.mp4';
import barbeariaVideo from './assets/videos/barbearia.mp4';

const projectsData = [
  {
    id: 1,
    link: 'https://josewilliam.vercel.app/',
    imgSrc: 'https://i.ibb.co/JjNVZBcs/Jose-William.png',
    videoSrc: atletaPortfolioVideo,
    title: 'Portfolio Web Atleta de Basquete',
    icons: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-figma-plain',
      'devicon-bootstrap-plain',
      'custom-svg',
      'devicon-vercel-original-wordmark',
    ],
    description: 'Desenvolvimento de um portfolio web para o atleta de basquete sergipano.',
    details: 'Portfolio web desenvolvido para o atleta de basquete Jose William. Construido com HTML, CSS, JavaScript e GSAP para servir como portfolio pessoal e ferramenta de divulgacao profissional, apresentando habilidades, conquistas e melhores momentos em quadra com uma experiencia moderna e responsiva.',
  },
  {
    id: 2,
    link: 'https://sistema-estoque-one.vercel.app',
    imgSrc: 'https://i.ibb.co/whfc3cHp/estoque-Sistema.webp',
    videoSrc: sistemaEstoqueVideo,
    title: 'Sistema de Gerenciamento de Estoque',
    icons: [
      'devicon-nodejs-plain-wordmark',
      'devicon-javascript-plain',
      'devicon-express-original-wordmark',
      'devicon-react-plain',
      'devicon-tailwindcss-original',
      'devicon-figma-plain',
      'devicon-vercel-original-wordmark',
      'devicon-railway-original',
    ],
    description: 'Desenvolvimento de um sistema completo de gerenciamento de estoque.',
    details: 'Sistema completo de gerenciamento de estoque desenvolvido com Node.js, Express, React e Tailwind CSS, incluindo autenticacao com JWT e Bcrypt. O projeto centraliza controle de produtos, vendas e movimentacoes com foco em eficiencia operacional e usabilidade.',
  },
  {
    id: 3,
    link: 'https://barber-landing-page-gray.vercel.app/',
    imgSrc: 'https://i.ibb.co/5hRcFzKr/Hero.png',
    videoSrc: barbeariaVideo,
    title: 'Landing Page Barbearia',
    icons: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-figma-plain',
      'custom-svg',
      'devicon-vercel-original-wordmark',
    ],
    description: 'Landing page para barbearia, focada em captacao de clientes e exposicao de servicos.',
    details: 'Landing page construida com HTML, CSS, JavaScript e GSAP como parte dos estudos em desenvolvimento web. O projeto reforca fundamentos de interface, animacao e responsividade em uma pagina voltada para conversao e apresentacao de servicos.',
  },
  {
    id: 4,
    link: null,
    imgSrc: 'https://i.ibb.co/6cHnVtY2/Captura-de-ecr-2026-04-15-225322.png',
    videoSrc: null,
    title: 'Portfolio Mateus Araujo',
    icons: [
      'devicon-react-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'custom-svg',
      'devicon-figma-plain',
      'devicon-vercel-original-wordmark',
    ],
    description: 'Desenvolvimento do meu portfolio pessoal.',
    details: 'Este site foi desenvolvido com React, GSAP e Lenis para unir animacoes, scroll suave e uma experiencia visual moderna. Reune home com download de curriculo, stacks, servicos, sobre, projetos com modal e contatos diretos em uma apresentacao pessoal coesa.',
  },
];

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const updatePointer = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--pointer-x', `${x}%`);
      document.documentElement.style.setProperty('--pointer-y', `${y}%`);
    };

    const updateScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    };

    window.addEventListener('mousemove', updatePointer);
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('scroll', updateScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <AnimatedCursor />
      <div className="app-shell">
        <div className="app-background">
          <div className="app-background-grid" />
          <div className="app-background-noise" />
          <div className="app-background-glow glow-left" />
          <div className="app-background-glow glow-right" />
        </div>

        <div className="home-wrapper">
          <Header />
          <Home />
        </div>

        <Services />
        <About />
        <Projects data={projectsData} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
