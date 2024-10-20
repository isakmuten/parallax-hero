import HeroTop from '../assets/1-HERO-TOP.png';
import HeroMiddle from '../assets/1-HERO-MIDDLE.png';
import HeroBottom from '../assets/1-HERO-BOTTOM.png';
import HeroSecondViewport from '../assets/1-HERO-VIEWPORT-2.png';




const Home = () => {
  return (
    <section>
        <div className="sky">
            <img src={HeroTop} alt="hero-sky" />
        </div>
        <div className="mountains">
            <img src={HeroMiddle} alt="hero-mountains" />
        </div>
        <div className="ocean">
            <img src={HeroBottom} alt="hero-ocean" />
        </div>
        <div className="viewport-two">
            <img src={HeroSecondViewport} alt="second-viewport" />
        </div>
    </section>
    
  )
}

export default Home
