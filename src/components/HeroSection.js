import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-3.mp4' autoPlay loop muted></video>
      <h1>Your Next Adventure Is Round The Corner</h1>
      <p>Fellas, What are you waiting for? Hurry Up</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}

        >
          WATCH TRAILER <i src='./videos/video-3.mp4' className='far fa-play-circle' />
          
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;