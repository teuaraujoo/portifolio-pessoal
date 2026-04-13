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

const projectsData = [
  {
    id: 1,
    link: "https://josewilliam.vercel.app/",
    imgSrc: "https://i.ibb.co/JjNVZBcs/Jose-William.png",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Portfólio Web Atleta de Basquete",
    icons: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-figma-plain",
      "devicon-bootstrap-plain",
      "custom-svg",
      "devicon-vercel-original-wordmark",
    ],
    description: "Desenvolviemnto de um portfólio web desenvolvido para o atleta de basquete sergipano.",
    details: "Portfólio Web desenvolvido para o atleta de basquete José William. Desenvolvido utilziando HTML, CSS, JavaScript e GSAP. O objetivo do site é servir como portfólio pessoal e ferramenta de divulgação profissional, apresentando suas habilidades, conquistas e melhores momentos em quadra. O design é moderno e responsivo, garantindo uma experiência de usuário fluida em dispositivos móveis e desktops. A estrutura do site inclui seções para biografia, estatísticas, galeria de fotos e vídeos, além de um formulário de contato para oportunidades profissionais."
  },
  {
    id: 2,
    link: "https://sistema-estoque-one.vercel.app",
    imgSrc: "https://i.ibb.co/whfc3cHp/estoque-Sistema.webp",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Sistema de Gerencaimento de Estoque",
    icons: [
      "devicon-nodejs-plain-wordmark",
      "devicon-javascript-plain",
      "devicon-express-original-wordmark",
      "devicon-react-plain",
      "devicon-tailwindcss-original",
      "devicon-figma-plain",
      "devicon-vercel-original-wordmark",
      "devicon-railway-original"
    ],
    description: "Desenvolvimento de um sistema completo de gerenciamento de estoque.",
    details: "Desenvolvimento de um sistema completo de gerenciamento de estoque utilizando Node.js, Express, React e Tailwind CSS. Ale´m de bibliotecas como JWT e Bcrypt para autenticação de usuários. O sistema permite o controle eficiente de produtos, vendas e movimentações de estoque, além de oferecer uma interface intuitiva para os usuários."
  },
  {
    id: 3,
    link: "https://barber-landing-page-gray.vercel.app/",
    imgSrc: "https://i.ibb.co/5hRcFzKr/Hero.png",
    videoSrc: "https://streamable.com/k6nb5v?t=4",
    title: "Landing Page Barbearia",
    icons: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-figma-plain",
      "custom-svg",
      "devicon-vercel-original-wordmark"
    ],
    description: "Desenvolvimento de uma landing page para barbearia, focada em captação de clientes e exposição de serviços.",
    details: "Uma landing page construída com HTML, CSS, JavaScript e GSAP. Esse projeto foi desenvolvido como parte dos meus estudos em desenvolvimento web no intuito de fortalecer meu portfólio e solidificar conceitos estudados das tecnologias usadas no projeto. O design é moderno e responsivo, garantindo uma experiência de usuário fluida em dispositivos móveis e desktops."
  },
  {
    id: 4,
    link: null,
    imgSrc: null,
    videoSrc: null,
    title: "Landing Page Atleta de Basquete",
    icons: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-figma-plain",
      "devicon-vercel-original-wordmark",
      "devicon-bootstrap-plain"
    ],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas fugit numquam atque deserunt doloribus obcaecati. Laudantium praesentium expedita vitae repellat, fuga a eaque autem modi molestias veritatis, ipsum officia.",
    details: "Espaço reservado para vídeo e mais detalhes para expandir o engajamento com seus visitantes. Os modais suportam links adicionais também."
  }
];

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Preloader />
      <AnimatedCursor />
      <div className="home-wrapper">
        <Header />
        <Home />
      </div>
      <Services />
      <About />
      <Projects data={projectsData} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
