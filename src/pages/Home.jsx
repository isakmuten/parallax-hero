import React, { useEffect } from 'react';
import HeroTop from '../assets/1-HERO-TOP.png';
import HeroMiddle from '../assets/1-HERO-MIDDLE.png';
import HeroBottom from '../assets/1-HERO-BOTTOM.png';
import HeroSecondViewport from '../assets/1-HERO-VIEWPORT-2.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      document.querySelector('.hero-sky').style.transform = `translateY(${(scrollPosition * 0.5) / windowHeight * 100}vh)`;
      document.querySelector('.hero-mountains').style.transform = `translateY(${(scrollPosition * 0.3) / windowHeight * 100}vh)`;
      document.querySelector('.hero-ocean').style.transform = `translateY(${(scrollPosition * 0.0) / windowHeight * 100}vh)`;
      document.querySelector('.section-text').style.transform = `translateY(${(scrollPosition * 0.5) / windowHeight * 100}vh)`;
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <main className='home'>
      <section className="parallax">
        <div className="image-container">
          <img src={HeroTop} alt="hero-sky" className="hero-sky" />
          <img src={HeroMiddle} alt="hero-mountains" className="hero-mountains" />
          <img src={HeroBottom} alt="hero-ocean" className="hero-ocean" />
        </div>

        <div className='section-text'>
          <h2 id="text">Parallax Website</h2>
        </div>
      </section>

      <section className="sec">
        <div className="image-container-2">
          <img src={HeroSecondViewport} alt="second-viewport" className="viewport-two" />
        </div>
      </section> 

    </main>
  );
};

export default Home;
