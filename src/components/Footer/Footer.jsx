import { Link } from 'react-router-dom';
import ACBLogo from '../../assets/ACBLogo.png';
import './Footer.css';

const Footer = () => {
  const menuLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Our Projects' },
    { to: '/areas', label: 'Service Areas' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { to: '/services#renovation', label: 'Staircase Renovation' },
    { to: '/services#remodelling', label: 'Stair Remodelling' },
    { to: '/services#repairs', label: 'Stair Repairs' },
    { to: '/services#capping', label: 'Stair Capping | Retread' },
    { to: '/services#refinishing', label: 'Stair Refinishing' },
    { to: '/services#installation', label: 'Custom Stair Installation' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link">
              <img src={ACBLogo} alt="A&C Brothers" className="footer__logo" />
            </Link>
          </div>

          {/* Menu Column */}
          <div className="footer__column">
            <h4 className="footer__heading">MENU</h4>
            <ul className="footer__list">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer__column">
            <h4 className="footer__heading">SERVICES</h4>
            <ul className="footer__list">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="footer__column footer__contacts">
            <h4 className="footer__heading">CONTACTS</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Call Us</span>
              <a href="tel:+13657778010" className="footer__contact-value">
                +1 365-777-8010
              </a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">WhatsApp</span>
              <a href="https://wa.me/13657778010" className="footer__contact-value footer__contact-value--green">
                +1 365-777-8010
              </a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <a href="mailto:info@acstairs.ca" className="footer__contact-value">
                info@acstairs.ca
              </a>
            </div>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Z2M. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
