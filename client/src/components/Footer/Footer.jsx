import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={columnStyles}>
          <h3 style={headingStyles}>Enlaces</h3>
          <ul style={listStyles}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div style={columnStyles}>
          <h3 style={headingStyles}>Redes sociales</h3>
          <ul style={listStyles}>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div style={columnStyles}>
          <h3 style={headingStyles}>Información de contacto</h3>
          <p>Teléfono: 123-456-7890</p>
          <p>Email: ejemplo@example.com</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#f2f2f2',
  padding: '20px 0',
  marginTop:"150px"
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '960px',
  margin: '0 auto',
};

const columnStyles = {
  flex: 1,
};

const headingStyles = {
  fontSize: '18px',
  marginBottom: '10px',
};

const listStyles = {
  listStyle: 'none',
  padding: 0,
};

export default Footer;
