import { useState, useEffect } from 'react';
import Splash1 from '../../assets/Splash1.png';
import Splash1AddOn from '../../assets/Splash1AddOn.png';
import ACBLogo from '../../assets/ACBLogo.png';
import AddOn1 from '../../assets/AddOn1.jpg';
import AddOn2 from '../../assets/AddOn2.png';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
import Img5 from '../../assets/5.png';
import Img6 from '../../assets/6.png';
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
    </div>
  );
};

export default Home;
