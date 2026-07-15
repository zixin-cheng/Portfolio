import { useEffect } from 'react';

import IntroStrip from './components/IntroStrip';
import Navigationbar from '../components/NavigationBar';
import Paragraph from './components/Paragraph';
import Video from './components/Video';
import FooterNav from './components/FooterNav';
import Footer from '../components/Footer';

import styles from './ProjectPage.module.css';

export default function MotionReel() {
  useEffect(() => {
    document.title = 'Motion Reel — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <IntroStrip tags={'MOTION DESIGN & CREATIVE CODING'} title={'Motion Reel'} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
          <Paragraph
            header={'2D/3D Motion Design Reel'}
            content={`
          Please enjoy a selection of motion design projects that I've worked on this year! Most of these works are freelance projects for Superunion with clients such as Bank of America, Intel, Infosys, CDF, American Express, etc.
  `}
          />

          <div style={{ width: '100%', aspectRatio: '16 / 9' }}>
            <iframe
              src="https://player.vimeo.com/video/1205556794?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              vimeo_logo="false"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Motion Reel"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
          <Paragraph
            header={'Generative Design Reel'}
            content={`
          Take a look at a collection of experimental generative designs I've created throughout the past year. Check out my <a href="https://www.janechengdesign.com/itpblog" target="_blank" rel="noopener noreferrer">blog page</a> for detailed descriptions and processes.
  `}
          />

          <Video
            videoSrc={require('./assets/MotionReel/Generative Design.mp4')}
            orientation={'landscape'}
            caption={`Generative Design Reel
`}
          />
        </div>

        <FooterNav prev={'WPP House'} prevSrc={'/wpp-house'} next={'TapType'} nextSrc={'/taptype'} />
      </div>
      <Footer />
    </div>
  );
}
