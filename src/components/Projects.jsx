import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgPlaceholder from '../assets/images/iamgeCheia.webp';
import '../modal.css';

gsap.registerPlugin(ScrollTrigger);

function CustomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z" />
      <path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z" />
      <path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z" />
      <path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z" />
    </svg>
  );
}

export default function Projects({ data }) {
  const sectionRef = useRef(null);
  const [openModalId, setOpenModalId] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('modal-open', openModalId !== null);
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [openModalId]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.projects-heading > *', {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
    }).from('.tag-content', {
      y: 42,
      opacity: 0,
      duration: 0.75,
      stagger: 0.16,
      ease: 'power3.out',
    }, '-=0.35');
  }, { scope: sectionRef });

  return (
    <section className="section projects-section" id="projects" ref={sectionRef}>
      <div className="section-ambient section-ambient-projects" />

      <div className="projects-heading">
        <span className="section-label">Projetos</span>
        <h1 className="title projects">Projetos feitos, clientes satisfeitos</h1>
        <p>Soluções sob medida.
          Veja como transformo ideias em presença digital <br /> de verdade.</p>
      </div>

      <div className="projects-card-container">
        {data?.map((project) => (
          <div key={project.id} className="project-shell">
            <a
              href="#"
              className="tag-content"
              onClick={(event) => {
                event.preventDefault();
                setOpenModalId(project.id);
              }}
            >
              <div className="projects-card">
                <div className="img-card">
                  <img src={project.imgSrc || imgPlaceholder} alt={project.title} />
                </div>

                <div className="project-card-reflection" />

                <div className="icons-container">
                  <div className="title-icons">
                    <p>{project.title}</p>
                  </div>

                  <div className="icons">
                    {project.icons?.map((icon, idx) => (
                      icon === 'custom-svg'
                        ? <CustomIcon key={`${project.id}-custom-${idx}`} />
                        : <i key={`${project.id}-${icon}-${idx}`} className={icon}></i>
                    ))}
                  </div>
                </div>

                <p className="card-text-content">{project.description}</p>
              </div>
            </a>

            {openModalId === project.id && (
              <div
                className="custom-modal-overlay"
                onClick={(event) => {
                  if (event.target.className === 'custom-modal-overlay') {
                    setOpenModalId(null);
                  }
                }}
              >
                <div className="custom-modal-content">
                  <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button className="close-btn" onClick={() => setOpenModalId(null)}>
                      &times;
                    </button>
                  </div>

                  <div className="modal-body">
                    {project.videoSrc ? (
                      <div className="video-wrapper">
                        <video controls autoPlay muted playsInline preload="metadata">
                          <source src={project.videoSrc} type="video/mp4" />
                          Seu navegador não suporta este formato de vídeo.
                        </video>
                      </div>
                    ) : (
                      <div className="no-video">Vídeo não disponível</div>
                    )}
                    <p className="modal-description">{project.details}</p>
                  </div>

                  <div className="modal-footer">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="primary-btn">
                        Visitar Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
