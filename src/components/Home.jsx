import cvFile from '../assets/data/Currículo - Mateus Araujo.docx?url';

export default function Home() {
  return (
    <section id="home">
      <div className="home-container">
        {/* CONTENT */}
        <div className="title-container">
          <div className="location-tag">
            <p className="digitando">
              <i className="fa-solid fa-location-dot"></i>Aracaju, Sergipe
            </p>
          </div>
          <h1>Mateus Araujo</h1>
          <h2>FullStack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil obcaecati odit alias quam,
            perspiciatis, repudiandae deserunt doloribus fugiat nam quaerat facilis id illo ea saepe magni
            libero, similique amet magnam.
          </p>
        </div>
        
        {/* BOTOES HOME */}
        <div className="home-button">
          <a className="primary-btn" href={cvFile} download="Currículo - Mateus Araujo">
            Download CV
          </a>
          <a className="primary-btn outline" href="https://github.com/teuaraujoo" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        
        {/* STACKS CONTAINER */}
        <div className="stacks-container">
          <div className="stacks-track">
            <div className="stack"><i className="devicon-git-plain"></i><p>Git</p></div>
            <div className="stack"><i className="devicon-html5-plain"></i><p>HTML</p></div>
            <div className="stack"><i className="devicon-css3-plain"></i><p>CSS</p></div>
            <div className="stack"><i className="devicon-javascript-plain"></i><p>JavaScript</p></div>
            <div className="stack"><i className="devicon-typescript-plain"></i><p>TypeScript</p></div>
            <div className="stack"><i className="devicon-react-original"></i><p>React.js</p></div>
            <div className="stack"><i className="devicon-express-original"></i><p>Express</p></div>
            <div className="stack"><i className="devicon-nodejs-plain-wordmark"></i><p>Node.js</p></div>
            <div className="stack"><i className="devicon-mysql-original"></i><p>MySQL</p></div>
          </div>

          <div aria-hidden="true" className="stacks-track">
            <div className="stack"><i className="devicon-git-plain"></i><p>Git</p></div>
            <div className="stack"><i className="devicon-html5-plain"></i><p>HTML</p></div>
            <div className="stack"><i className="devicon-css3-plain"></i><p>CSS</p></div>
            <div className="stack"><i className="devicon-javascript-plain"></i><p>JavaScript</p></div>
            <div className="stack"><i className="devicon-typescript-plain"></i><p>TypeScript</p></div>
            <div className="stack"><i className="devicon-react-original"></i><p>React.js</p></div>
            <div className="stack"><i className="devicon-express-original"></i><p>Express</p></div>
            <div className="stack"><i className="devicon-nodejs-plain-wordmark"></i><p>Node.js</p></div>
            <div className="stack"><i className="devicon-mysql-original"></i><p>MySQL</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
