import React from 'react';
import videobg from '../../assets/videoplayback.mp4';
import background from '../../assets/background.png';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <>
      <div className="main_container">
        <div className="image_container">
          <img src={background} alt="background" />
        </div>
        <div className="content_container">
          <h2>Empowering businesses with innovative software solutions.</h2>
          <Link to='/contact' ><button className='connect_btn' >Get Free Demo</button></Link>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
