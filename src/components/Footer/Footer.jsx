import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' },
    ],
    services: [
      { to: '/services#ac-repair', label: 'AC Repair' },
      { to: '/services#installation', label: 'Installation' },
      { to: '/services#maintenance', label: 'Maintenance' },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">AC</span>
              <span className="footer__logo-accent">Brothers</span>
            </Link>
            <p className="footer__tagline">
              Professional HVAC services you can trust. Keeping your home comfortable all year round.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__list">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h4 className="footer__heading">Contact</h4>
            <address className="footer__contact">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+1234567890" className="footer__link">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@acbrothers.com" className="footer__link">
                  info@acbrothers.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} ACBrothers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
