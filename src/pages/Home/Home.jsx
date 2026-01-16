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

  useEffect(() => {
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
      <div className={`splash__burger-menu ${showTopLogo ? 'splash__burger-menu--visible' : ''}`}>
        <div className="splash__burger-bar splash__burger-bar--1"></div>
        <div className="splash__burger-bar splash__burger-bar--2"></div>
        <div className="splash__burger-bar splash__burger-bar--3"></div>
      </div>

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
      <div className={`splash__scroll-arrow ${showTopLogo ? 'splash__scroll-arrow--visible' : ''}`}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_arrow" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="url(#pattern0_arrow)"/>
          </mask>
          <g mask="url(#mask0_arrow)">
            <rect width="50" height="48" fill="#DDD3B6"/>
          </g>
          <defs>
            <pattern id="pattern0_arrow" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_arrow" transform="translate(0.00199203) scale(0.000996016)"/>
            </pattern>
            <image id="image0_arrow" width="1000" height="1004" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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4A4CBAjsFxDQ989ABQQIECBAgAABAtUF9EeAAIEDAgL6ASS3ECBAgAABAgQIEIgsoDYCBGoICOg15qgLAgQIECBAgAABArMErEuAwCIBAX0RtG0IECBAgAABAgQIEHgm4BoBAh8CAvqHhL8JECBAgAABAgQIEKgnoCMCiQQE9ETDUioBAgQIECBAgAABArEEVENgpICAPlLTWgQIECBAgAABAgQIEBgnYKVmAgJ6s4FrlwABAgQIECBAgAABAr8F/BlNQECPNhH1ECBAgAABAgQIECBAoIKAHk4LCOinyTxAgAABAgQIECBAgAABArsFKu4voFecqp4IECBAgAABAgQIECBA4I7AlmcF9C3sNiVAgAABAgQIECBAgACBvgLPOxfQn7u4SoAAAQIECBAgQIAAAQIElgoMC+hLq7YZAQIECBAgQIAAAQIECBAoJpAloBdj1w4BAgQIECBAgAABAgQIEPgqIKD/z8MfBAgQIECAAAECBAgQIEBgr4CAvsLfHgQIECBAgAABAgQIECBA4I2AgP4GKMPbaiRAgAABAgQIECBAgACB/AICev4Zzu7A+gQIECBAgAABAgQIECCwQEBAX4Bsi1cC3iNAgAABAgQIECBAgACBh4CA/lDwqiugMwIECBAgQIAAAQIECCQRENCTDEqZMQVURYAAAQIECBAgQIAAgVECAvooSesQGC9gRQIECBAgQIAAAQIEGgkI6I2GrVUCXwX8RoAAAQIECBAgQCCKgIAeaRpqIVBFQB8ECBAgQIAAgWwCAnq2iamXAAECBAgQIBBBQA0ECBAYLiCgDye1IAECBAgQIEBgloB1CRAgQGCtgIC+1ttuBAgQIECAAAECfwT8RIAAAQLfBAT0byB+JUCAAAECBAgQKCygNwIECOQQENCTD0+7BAgQIECAAAECBAhUF/hRwJkSAAAQAElEQVQmoBMCBP4SENCPsnqMAAECBAgQIECAAAECBPYKCOhr/e1OgAABAgQIECBAgAABAl0F/t2sgN5VI/olQIAAAQIECBAgQIAAgV0CAnpde/sRIECAAAECBAgQIECAQBaB/38FAT3LmNRJgAABAgQIECBAgAABAjEFBPSh83ATAQIECBAII2ANAgQIECBQRkBALzNKjRAgMFfAygQIECBAgACB/gICev8Z65AAgQ4C+iRAgAABAgQIHBAQ0A8guYUAAQIECBCIKqAuAgQIECgiIKAXGaQ2CBAgQIDADAFrEiBAgACBPgICep9Z65QAAQIECPwl4E8CBAgQIBBLQECPNQ/VECBAgACBKgL6IECAAAECiQQE9ETDUioBAgQIEIghoAYCBAgQIFBPQECvN1MdESBAgAABAncFPE+AAAECGwQE9A3otiRAgAABAgR6Cui6qkDdBKoLCOjVJ6w/AgQIECBAgACBqwKeI0DglYCA/krHewQIECBAgAABAnkFVE6AQGIBAf0/lbpBhQQIECBAgAABAgQIECBQTEBALzZQ7RAgQIAAi1IECBAgQIBAEgEBPcmglEmAAAECBAgQIECAAAECcQV0cExAQD/m5C4CBAgQIECAAAECBAgQiCmgqrQCAnra0SmcAAECBAgQIECAAIHVAnYcJyCgj/O0EgECBAgQIECAAAECBAgcE2hwl4De4ATokQABAgQIECBAgAABAgT+Fpgc0P9+uP8IECBAgAABAgQIECBAgAABAgcEBPQDSGFvUQ0BAgQIECBAgAABAgQI1BAQ0GvMURcECBAgQIDATAFrEyBAgMBiAQF9MbjtCBAgQIAAAQIEDgj4iQABAgS+CQjo30D8SoAAAQIECBAgUEVAHwQIEEgmIKAnG5hyCRAgQIAAAQIRBNRAgAABAsEFBPTgA1IeAQIECBAgkE9AxQQIECBwV0BAv+vneQIECBAgQIDAbgH7EyBAoKKAgF5xqnoiQIAAAQIECFwV8BwBAl0FBPSuk9c3AQIECBAgQKCXgK4JEPiXgID+LxC/EiBAgAABAgQI1BLQDQECOgEB3RkgQIAAAQIECBAg0EbA7gQI/P8CArozQIAAAQIECBAgQKCdgM4JEHgqIKA/ZXGRAAECBAgQIECAAIF8AuolQCCrgICedXLqJkCAAAECBAgQWC9gRwIE5gkI6PNsrUyAAAECBAgQIECAAIFjAu4iQKCxgIDeePhaJ0CAAAECBAgQINBLQL8ECMQSENBjTUMlBAgQIECAAAECBFoL2J8AgXkCAvpVWhyLOwAAAltJREFU27D/P/b2J0CAAAECBAgQINCOgAMJ5BAQ0HPMSZUECBAgQIAAgYYCKiVAgMAlAQH9EpuHCBAgQIAAAQIECKwXsCMBAvMEBPR5tlYmQIAAAQIECBAgcF7AEwS6CgjogSevcgIECBAgQIAAAQIECNQUENBrzlVXBAgQIECAAAECBM4LqJxAYwEBvfHwtU6AAAECBAgQIEDgvID1CPQSENADzVu9BAgQIECAAAECBAgQ6C4goNc6AfolQIAAAQIECBAgQIBAEgEBPcmgVEmAAAECBAgQSC6gfAIECJwVENDPirmfAAECBAgQIECAAIF9AnYn0FxAQG9+ALRPgAABAgQIECBAgEAHAT0SaCIgoDcZtDYJECBAgAABAgQIENgv4A4CBGoKCOg156orAgQIECBAgACBSwKeI9BVQEA/OHm1EyBAgAABAgQIECBAYL+AHQg0FxDQmx8A7RMgQIAAAQIEOgjokQCBdAICerqRKZgAAQIECBAgEFdAZQQIEBgtIKCPFrUeAQIECBAgQIAAgXECViJAoJuAgN5t4volQIAAAQIECBD4LeBPAgS6CQjoAfauXgIECBAgQIBANQF9ECBAIJqAgB5tIuohQIAAAQIECBAg0FFAjwSaCwjozQ+A9gkQIECAAAECBAgQINBZoHtA7zx7vRMgQIAAAQIECBAgQIBAUIH/A0qw7CpaxP9RAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
      </div>

    </div>

    {/* Section 2 - Content Area */}
    <section className="section-two">
      <div className="section-two__rectangle"></div>
      <img 
        src={CircleGoing} 
        alt="" 
        className="section-two__circle"
      />
      <div className="section-two__white-box"></div>
    </section>
  </>
  );
};

export default Home;
