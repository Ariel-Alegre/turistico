import React from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={columnStyles}>
          <h3 style={headingStyles}>Enlaces</h3>
          <ul style={listStyles}>
            <li><a href="/">  Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div style={columnStyles}>
          <h3 style={headingStyles}>Redes sociales</h3>
          <ul style={listStyles}>
            <li><a href="https://www.facebook.com" target='_blanck'><FacebookIcon className='icons'/> Facebook</a></li>
            <li><a href="https://www.twitter.com" target='_blanck'><TwitterIcon/>Twitter</a></li>
            <li><a href="https://www.instagram.com" target='_blanck'><InstagramIcon/>Instagram</a></li>
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
  textDecoration: 'none',
  color: 'red'

};

export default Footer;
