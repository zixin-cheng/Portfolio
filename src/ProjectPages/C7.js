import { useEffect } from 'react';

import IntroStrip from './components/IntroStrip';
import Navigationbar from '../components/NavigationBar';
import Paragraph from './components/Paragraph';
import ImageHero from './components/ImageHero';
import InfoStrip from './components/InfoStrip';
import Video from './components/Video';
import Image from './components/Image';
import InlineVideo from './components/InlineVideo';
import InlineImage from './components/InlineImage';
import FooterNav from './components/FooterNav';
import Footer from '../components/Footer';

import styles from './ProjectPage.module.css';
import useEqualizeImgstripHeights from '../hooks/useEqualizeImgstripHeights';

export default function C7() {
  useEffect(() => {
    document.title = 'C7 Nova — Jane Cheng';
  }, []);

  // Equalize heights of media inside each imgstrip wrapper
  useEqualizeImgstripHeights('.' + styles.imgstrip_wrapper.replace(/\s+/g, '.'));
  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <IntroStrip tags={'3D & MOTION DESIGN'} title={'C7 Nova'} />
        <Paragraph
          content={`
          The Nova series introduces a fresh visual direction for C7, pairing refined industrial design with a vibrant palette of five colorways. The system balances consistency and individuality, allowing each speaker to stand out while feeling unmistakably part of the same family.`}
        />
      </div>
      <ImageHero imgSrc={require('./assets/C7/hero.png')} />
      <div className={`${styles.content_wrapper} ${styles.bottom}`}>
        <div className={styles.intro_p_wrapper}>
          <InfoStrip
            roles={['Motion Design', '3D Design']}
            tools={['After Effects', 'Cinema 4D', 'Gen AI']}
            deliverables={['Reel', 'Product Render']}
          />
          <Paragraph
            content={`
          Using a hybrid workflow of generative AI and 3D rendering, the motion pieces bring each colorway to life through atmospheric scenes inspired by nature. The result is a cinematic visual narrative that connects the product's palette to the landscapes from which it draws inspiration.`}
          />
        </div>
        <Video
          videoSrc={require('./assets/C7/speakers.mp4')}
          orientation={'landscape'}
          autoplay={'autoplay'}
          loop={'loop'}
        />
        <div className={styles.imgstrip_wrapper}>
          <InlineImage imgSrc={require('./assets/C7/green speaker.png')} orientation={'landscape'} />
          <InlineImage imgSrc={require('./assets/C7/blue speaker.png')} orientation={'landscape'} />
        </div>
        <div className={styles.imgstrip_wrapper}>
          <InlineImage imgSrc={require('./assets/C7/orange speaker.png')} orientation={'landscape'} />
          <InlineImage imgSrc={require('./assets/C7/pink speaker.png')} orientation={'landscape'} />
          <InlineImage imgSrc={require('./assets/C7/purple speaker.png')} orientation={'landscape'} />
        </div>

        <FooterNav prev={'Colaj.ai'} prevSrc={'/colaj'} next={'Motion Reel'} nextSrc={'/motion-reel'} />
      </div>
      <Footer />
    </div>
  );
}
