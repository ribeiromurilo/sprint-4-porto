import './Banner.css';
import { Button } from '../Button/Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video-1.mp4' autoPlay loop muted />
      <h1>SEGURO BIKE <br /> COM A PORTO!</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Vistorie já!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;