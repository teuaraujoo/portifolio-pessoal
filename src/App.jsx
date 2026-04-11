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
    title: "Portfólio Web atleta de basquete",
    icons: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-figma-plain",
      "devicon-bootstrap-plain",
      "devicon-vercel-original-wordmark",
      "custom-svg"
    ],
    description: "Landing page desenvolvida para o atleta de basquete José William. O objetivo do site é servir como portfólio pessoal e ferramenta de divulgação profissional, apresentando suas habilidades, conquistas e melhores momentos em quadra.",
    details: "Com tecnologias modernas como HTML, CSS e JavaScript, construímos um layout dinâmico que foca na conversão e contato. A implementação no servidor Vercel garante performance com CDN inteligente."
  },
  {
    id: 2,
    link: "https://barber-landing-page-gray.vercel.app/",
    imgSrc: "https://i.ibb.co/5hRcFzKr/Hero.png",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Página de vendas para barbearia",
    icons: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-figma-plain",
      "custom-svg",
      "devicon-vercel-original-wordmark"
    ],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas fugit numquam atque deserunt doloribus obcaecati. Laudantium praesentium expedita vitae repellat, fuga a eaque autem modi molestias veritatis, ipsum officia.",
    details: "Uma landing page construída especificamente para captação de clientes localmente. Utilizamos designs contrastantes para exibir os trabalhos de corte com maestria."
  },
  {
    id: 3,
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
