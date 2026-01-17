import { useState, useEffect } from 'react';
import Splash1 from '../../assets/Splash1.png';
import Splash1AddOn from '../../assets/Splash1AddOn.png';
import ACBLogo from '../../assets/ACBLogo.png';
import ACBLogo2 from '../../assets/ACBLogo2.png';
import AddOn1 from '../../assets/AddOn1.jpg';
import AddOn2 from '../../assets/AddOn2.png';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
import Img5 from '../../assets/5.png';
import Img6 from '../../assets/6.png';
import CircleGoing from '../../assets/CircleGoing.png';
import Frame from '../../assets/Frame.png';
import FramedPic from '../../assets/FramedPic.png';
import AguyHoldingIdk from '../../assets/AguyHoldingIdk.png';
import Arrow from '../../assets/Arrow.png';
import InspectingTheFloor from '../../assets/InspectingTheFloor.png';
import EditIcon from '../../assets/Edit.png';
import SecurityIcon from '../../assets/Security.png';
import AchievementsIcon from '../../assets/Achievments.png';
import BusIcon from '../../assets/Bus.png';
import './Home.css';

const Home = () => {
  const [showAddOn, setShowAddOn] = useState(false);
  const [zoomAddOn, setZoomAddOn] = useState(false);
  const [showSideImages, setShowSideImages] = useState(false);
  const [showTopRow, setShowTopRow] = useState(false);
  const [showBottomRow, setShowBottomRow] = useState(false);
  const [gatherPhotos, setGatherPhotos] = useState(false);
  const [compressCenter, setCompressCenter] = useState(false);
  const [expandCenter, setExpandCenter] = useState(false);
  const [showTopLogo, setShowTopLogo] = useState(false);
  const [activeService, setActiveService] = useState(null); // For accordion, all closed by default
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    { img: Img1, title: 'Residential Installation Project- Doors and stairs' },
    { img: Img2, title: 'Residential Installation Project- Doors and stairs' },
    { img: Img3, title: 'Residential Installation Project- Doors and stairs' },
    { img: Img4, title: 'Residential Installation Project- Doors and stairs' },
    { img: Img5, title: 'Residential Installation Project- Doors and stairs' },
    { img: Img6, title: 'Residential Installation Project- Doors and stairs' },
  ];

  const scrollCarousel = (direction) => {
    const container = document.querySelector('.section-five__carousel');
    const scrollAmount = 400;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCarouselScroll = (e) => {
    const container = e.target;
    const scrollPercent = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    setScrollPosition(scrollPercent);
  };

  // Animation sequence
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately on mount/refresh
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Reset all states on mount (for refresh)
    setShowAddOn(false);
    setZoomAddOn(false);
    setShowSideImages(false);
    setShowTopRow(false);
    setShowBottomRow(false);
    setGatherPhotos(false);
    setCompressCenter(false);
    setExpandCenter(false);
    setShowTopLogo(false);
    
    // Disable scrolling initially
    document.body.style.overflow = 'hidden';
    
    // Step 1: Show the add-on image after 0.8 seconds
    const timer1 = setTimeout(() => {
      setShowAddOn(true);
    }, 800);

    // Step 2: Zoom the add-on and dim the pattern after 1.6 seconds
    const timer2 = setTimeout(() => {
      setZoomAddOn(true);
    }, 1600);

    // Step 3: Slide in side images after zoom completes (3.1 seconds)
    const timer3 = setTimeout(() => {
      setShowSideImages(true);
    }, 3100);

    // Step 4: Slide in top row (3, 2, 1) after 3.6 seconds
    const timer4 = setTimeout(() => {
      setShowTopRow(true);
    }, 3600);

    // Step 5: Slide in bottom row (4, 5, 6) after 4.1 seconds
    const timer5 = setTimeout(() => {
      setShowBottomRow(true);
    }, 4100);

    // Step 6: Gather photos together (remove gaps) after 5.2 seconds
    const timer6 = setTimeout(() => {
      setGatherPhotos(true);
    }, 5200);

    // Step 7: Compress center (shrink center, tighten images) after 6.5 seconds
    const timer7 = setTimeout(() => {
      setCompressCenter(true);
    }, 6500);

    // Step 8: EXPLODE - expand center and fly away other images after 7.5 seconds
    const timer8 = setTimeout(() => {
      setExpandCenter(true);
    }, 7500);

    // Step 9: Show logo at top center after expansion completes (8.2 seconds)
    const timer9 = setTimeout(() => {
      setShowTopLogo(true);
      // Enable scrolling after animations complete
      document.body.style.overflow = '';
    }, 8200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      // Re-enable scrolling on cleanup
      document.body.style.overflow = '';
    };
  }, []);

  return (
  <>
    <div className="splash">
      {/* Main pattern */}
      <img 
        src={Splash1} 
        alt="" 
        className={`splash__pattern ${zoomAddOn ? 'splash__pattern--dimmed' : ''}`}
      />
      
      {/* Gallery grid */}
      <div className={`splash__gallery ${gatherPhotos ? 'splash__gallery--gathered' : ''} ${compressCenter ? 'splash__gallery--compress' : ''} ${expandCenter ? 'splash__gallery--expand' : ''}`}>
        {/* Top row - 1, 2, 3 from left */}
        <div className={`splash__row splash__row--top ${showTopRow ? 'splash__row--animated' : ''}`}>
          <img 
            src={Img1} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-top splash__fly-top-left ${showTopRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0s' }}
          />
          <img 
            src={Img2} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-top splash__fly-top ${showTopRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0.15s' }}
          />
          <img 
            src={Img3} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-top splash__fly-top-right ${showTopRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0.3s' }}
          />
        </div>

        {/* Middle row - AddOn1, Splash1AddOn, AddOn2 */}
        <div className="splash__row splash__row--middle">
          <img 
            src={AddOn1} 
            alt="" 
            className={`splash__grid-image splash__side-image--left splash__fly-left ${showSideImages ? 'splash__grid-image--visible' : ''}`}
          />
          <img 
            src={Splash1AddOn} 
            alt="" 
            className={`splash__grid-image splash__addon splash__center-expand ${showAddOn ? 'splash__addon--visible' : ''} ${zoomAddOn ? 'splash__addon--zoomed' : ''}`}
          />
          <img 
            src={AddOn2} 
            alt="" 
            className={`splash__grid-image splash__side-image--right splash__fly-right ${showSideImages ? 'splash__grid-image--visible' : ''}`}
          />
        </div>

        {/* Bottom row - 6, 5, 4 from right */}
        <div className={`splash__row splash__row--bottom ${showBottomRow ? 'splash__row--animated' : ''}`}>
          <img 
            src={Img6} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-bottom splash__fly-bottom-left ${showBottomRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0s' }}
          />
          <img 
            src={Img5} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-bottom splash__fly-bottom ${showBottomRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0.15s' }}
          />
          <img 
            src={Img4} 
            alt="" 
            className={`splash__grid-image splash__grid-image--from-bottom splash__fly-bottom-right ${showBottomRow ? 'splash__grid-image--visible' : ''}`}
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>
      
      {/* Logo - Figma Group 2147229507 (center during zoom) */}
      <img 
        src={ACBLogo} 
        alt="ACBrothers" 
        className={`splash__logo ${zoomAddOn ? 'splash__logo--visible' : ''} ${expandCenter ? 'splash__logo--fade-out' : ''}`}
      />

      {/* Logo - Top center after expansion */}
      <img 
        src={ACBLogo} 
        alt="ACBrothers" 
        className={`splash__logo-top ${showTopLogo ? 'splash__logo-top--visible' : ''}`}
      />

      {/* Burger Menu - Top left after expansion */}
      <div 
        className={`splash__burger-menu ${showTopLogo ? 'splash__burger-menu--visible' : ''}`}
        onClick={() => setMenuOpen(true)}
      >
        <div className="splash__burger-bar splash__burger-bar--1"></div>
        <div className="splash__burger-bar splash__burger-bar--2"></div>
        <div className="splash__burger-bar splash__burger-bar--3"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__close" onClick={() => setMenuOpen(false)}>
          <span></span>
          <span></span>
        </div>
        
        <nav className="sidebar__nav">
          <a href="#" className="sidebar__link">HOME</a>
          <a href="#" className="sidebar__link">ABOUT US</a>
          <a href="#" className="sidebar__link">SERVICES</a>
          <a href="#" className="sidebar__link">OUR PROJECTS</a>
          <a href="#" className="sidebar__link">SERVICE AREAS</a>
          <a href="#" className="sidebar__link">GALLERY</a>
          <a href="#" className="sidebar__link">CONTACT US</a>
        </nav>

        <div className="sidebar__divider"></div>

        <div className="sidebar__contact">
          <div className="sidebar__contact-item">
            <span className="sidebar__contact-label">Call Us</span>
            <a href="tel:+13657778010" className="sidebar__contact-value">+1 365-777-8010</a>
          </div>
          <div className="sidebar__contact-item">
            <span className="sidebar__contact-label">WhatsApp</span>
            <a href="https://wa.me/13657778010" className="sidebar__contact-value">+1 365-777-8010</a>
          </div>
          <div className="sidebar__contact-item">
            <span className="sidebar__contact-label">Email</span>
            <a href="mailto:info@acstairs.ca" className="sidebar__contact-value">info@acstairs.ca</a>
          </div>
        </div>

        <div className="sidebar__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="sidebar__social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="sidebar__social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar__overlay ${menuOpen ? 'sidebar__overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Get Quote Button - Top right after expansion */}
      <button className={`splash__get-quote ${showTopLogo ? 'splash__get-quote--visible' : ''}`}>
        Get Quote
      </button>

      {/* Logo 2 - Center of screen, scrolls with Splash1AddOn */}
      <img 
        src={ACBLogo2} 
        alt="ACBrothers" 
        className={`splash__logo-center ${showTopLogo ? 'splash__logo-center--visible' : ''}`}
      />

      {/* Scroll Down Arrow - Bottom center after expansion */}
      <img 
        src={Arrow} 
        alt="Scroll down" 
        className={`splash__scroll-arrow ${showTopLogo ? 'splash__scroll-arrow--visible' : ''}`}
      />

    </div>

    {/* Section 2 - Content Area */}
    <section className="section-two">
      <div className="section-two__rectangle">
        <p className="section-two__text">
          WE REALIZE TIMELESS <span className="section-two__highlight section-two__doors-hover"><span className="section-two__highlight-text">DOORS</span><img src={AguyHoldingIdk} alt="" className="section-two__doors-image" /></span><br />
          AND <span className="section-two__highlight section-two__staircases-hover"><span className="section-two__highlight-text">STAIRCASES</span><img src={Img5} alt="" className="section-two__staircases-image" /></span> <span className="section-two__lowercase">under a Roof.</span>
        </p>
      </div>
      <img 
        src={CircleGoing} 
        alt="" 
        className="section-two__circle"
      />
      <div className="section-two__white-box">
        <div className="section-two__content">
          <div className="section-two__left">
            <h2 className="section-two__heading">ABOUT US</h2>
            <h1 className="section-two__title">A&C BROTHERS</h1>
            <p className="section-two__description">
              At A&C Brothers, we believe your staircase should be more than just a functional element — it should be a centrepiece of your home's design. With years of experience in staircase renovations, railing installations, and custom craftsmanship, we transform ordinary staircases into stunning architectural features that reflect your style and enhance your living space.
            </p>
            <button className="section-two__read-more">Read More</button>
          </div>
          <div className="section-two__right">
            <div className="section-two__frame-container">
              <img src={Frame} alt="" className="section-two__frame" />
              <img src={FramedPic} alt="Staircase" className="section-two__framed-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 - Our Process */}
    <section className="section-three">
      <div className="section-three__container">
        <div className="section-three__header">
          <h2 className="section-three__heading">OUR PROCESS</h2>
          <div className="section-three__watermark">
            <span>EXPECTATIONS</span>
            <span>EXPECTATIONS</span>
          </div>
        </div>
        <p className="section-three__text">
          AT AC STAIRS & RAILINGS, WE ENSURE EVERY PROJECT EXCEEDS EXPECTATIONS.
          FROM <span className="section-three__highlight">CONSULTATION & DESIGN</span>, THROUGH <span className="section-three__highlight">MATERIAL SELECTION</span> AND <span className="section-three__highlight">EXPERT INSTALLATION</span>, TO <span className="section-three__highlight">FINAL TOUCHES & QUALITY CHECK</span>, WE HANDLE EVERY STEP WITH PRECISION AND CARE.
        </p>
      </div>
      <div className="section-three__topo-pattern"></div>
    </section>

    {/* Section 4 - Our Services */}
    <section className="section-four">
      <div className="section-four__image">
        <img src={AguyHoldingIdk} alt="Craftsman at work" />
      </div>
      <div className="section-four__content">
        <span className="section-four__label">OUR SERVICES</span>
        <h2 className="section-four__title">CRAFTED SOLUTIONS<br />FOR REFINED SPACES</h2>
        
        <div className="section-four__accordion">
          <div 
            className={`section-four__item ${activeService === 0 ? 'section-four__item--active' : ''}`}
            onClick={() => setActiveService(activeService === 0 ? null : 0)}
          >
            <div className="section-four__item-header">
              <span>Staircase Renovation</span>
              <span className="section-four__icon"></span>
            </div>
            <div className="section-four__item-body">
              <p className="section-four__item-content">
                Transform your existing staircase with our expert renovation services. We breathe new life into worn stairs with refinishing, structural repairs, and modern updates.
              </p>
            </div>
          </div>

          <div 
            className={`section-four__item ${activeService === 1 ? 'section-four__item--active' : ''}`}
            onClick={() => setActiveService(activeService === 1 ? null : 1)}
          >
            <div className="section-four__item-header">
              <span>Custom Stair Installations</span>
              <span className="section-four__icon"></span>
            </div>
            <div className="section-four__item-body">
              <p className="section-four__item-content">
                From floating and spiral staircases to curved layouts and basement stairs, we design and install custom-built solutions that perfectly fit your home's layout and style.
              </p>
            </div>
          </div>

          <div 
            className={`section-four__item ${activeService === 2 ? 'section-four__item--active' : ''}`}
            onClick={() => setActiveService(activeService === 2 ? null : 2)}
          >
            <div className="section-four__item-header">
              <span>Railing & Spindle Installations</span>
              <span className="section-four__icon"></span>
            </div>
            <div className="section-four__item-body">
              <p className="section-four__item-content">
                Upgrade your railings with our premium selection of wood, metal, and glass options. We install spindles, balusters, and handrails that combine safety with stunning aesthetics.
              </p>
            </div>
          </div>

          <div 
            className={`section-four__item ${activeService === 3 ? 'section-four__item--active' : ''}`}
            onClick={() => setActiveService(activeService === 3 ? null : 3)}
          >
            <div className="section-four__item-header">
              <span>Hardwood Floor Refinishing</span>
              <span className="section-four__icon"></span>
            </div>
            <div className="section-four__item-body">
              <p className="section-four__item-content">
                Restore the natural beauty of your hardwood floors with our professional refinishing services. We sand, stain, and seal to perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5 - Our Projects */}
    <section className="section-five">
      <div className="section-five__header">
        <h2 className="section-five__title">OUR SUCCESSFULLY FINISHED PROJECTS</h2>
        <p className="section-five__subtitle">
          We love seeing our work bring spaces to life. Explore selected projects that showcase inspiring, functional designs.
        </p>
      </div>
      
      <div className="section-five__carousel" onScroll={handleCarouselScroll}>
        {projects.map((project, index) => (
          <div key={index} className="section-five__card">
            <div className="section-five__card-image">
              <img src={project.img} alt={project.title} />
            </div>
            <p className="section-five__card-title">{project.title}</p>
          </div>
        ))}
      </div>

      <div className="section-five__controls">
        <div className="section-five__progress">
          <div 
            className="section-five__progress-bar" 
            style={{ width: `${Math.max(20, scrollPosition)}%` }}
          ></div>
        </div>
        <div className="section-five__arrows">
          <button className="section-five__arrow" onClick={() => scrollCarousel('left')}>
            <span>‹</span>
          </button>
          <button className="section-five__arrow" onClick={() => scrollCarousel('right')}>
            <span>›</span>
          </button>
        </div>
      </div>
    </section>

    {/* Section 6 - Hassle-Free & CTA */}
    <section className="section-six">
      {/* Top part - Features */}
      <div className="section-six__features">
        <h2 className="section-six__features-title">Hassle-Free, Every Time</h2>
        <div className="section-six__features-grid">
          <div className="section-six__feature">
            <div className="section-six__feature-icon">
              <img src={EditIcon} alt="Built for Real Homes" />
            </div>
            <h3 className="section-six__feature-title">Built for Real Homes</h3>
            <p className="section-six__feature-desc">Thoughtfully crafted solutions designed to fit real homes and everyday living.</p>
          </div>
          <div className="section-six__feature">
            <div className="section-six__feature-icon">
              <img src={SecurityIcon} alt="Work You Can Trust" />
            </div>
            <h3 className="section-six__feature-title">Work You Can Trust</h3>
            <p className="section-six__feature-desc">Reliable workmanship delivered with precision, care, and attention to detail.</p>
          </div>
          <div className="section-six__feature">
            <div className="section-six__feature-icon">
              <img src={AchievementsIcon} alt="Service Excellence" />
            </div>
            <h3 className="section-six__feature-title">Service Excellence</h3>
            <p className="section-six__feature-desc">Dedicated support and professional execution from start to completion.</p>
          </div>
          <div className="section-six__feature">
            <div className="section-six__feature-icon">
              <img src={BusIcon} alt="We Reach You Anywhere" />
            </div>
            <h3 className="section-six__feature-title">We Reach You Anywhere</h3>
            <p className="section-six__feature-desc">Seamless delivery and installation wherever your project is located.</p>
          </div>
        </div>
      </div>

      {/* Bottom part - CTA */}
      <div className="section-six__cta">
        <div className="section-six__cta-image">
          <img src={InspectingTheFloor} alt="Inspecting the floor" />
        </div>
        <div className="section-six__cta-content">
          {/* Rotating Circle */}
          <img 
            src={CircleGoing} 
            alt="" 
            className="section-six__circle"
          />
          <div className="section-six__cta-card">
            <span className="section-six__cta-label">START YOUR PROJECT TODAY</span>
            <h2 className="section-six__cta-title">You tell us your vision.<br />We will provide the solution.</h2>
            <button className="section-six__cta-button">
              Get a Free Consultation
              <span className="section-six__cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Home;
