import logoMarca from '../assets/images/logomarca.webp';

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2026 Mateus Araujo. Todos os direitos reservados.</p>
      <a href="https://www.instagram.com/teu.araujoo/" target="_blank" rel="noreferrer">
        <img src={logoMarca} alt="Logo Mateus" />
      </a>
    </div>
  );
}
