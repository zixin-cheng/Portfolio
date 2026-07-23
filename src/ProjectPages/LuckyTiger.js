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

export default function LuckyTiger() {
  useEffect(() => {
    document.title = 'Lucky Tiger — Jane Cheng';
  }, []);
  useEqualizeImgstripHeights('.' + styles.imgstrip_wrapper.replace(/\s+/g, '.'));
  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <IntroStrip tags={'WEB DEV & DESIGN'} title={'Happy Year of Tiger'} />
        <Paragraph
          content={`
          This is an in-house project created under the internship with Superunion for the 2022 Chinese New Year.
          <br/><br/>
          
          While you save your tiger as a PNG, why not save tigers in the wild too? Donate to WWF and help reverse the fortune of these unlucky cats – the only endangered animal in the Chinese zodiac.
          `}
        />
      </div>
      <ImageHero imgSrc={require('./assets/LuckyTiger/luckytiger_hero.jpeg')} />
      <div className={`${styles.content_wrapper} ${styles.bottom}`}>
        <div className={styles.intro_p_wrapper}>
          <InfoStrip
            roles={['Front-End Development', 'Visual Design']}
            tools={['three.js']}
            // teams={['Jessica Tan', 'Paola Demichelis']}
            deliverables={['Interactive Website']}
          />
          <Paragraph
            content={`
          Did you know that in Chinese a slot machine is called a ‘tiger machine’? With that in mind, we’ve created our own so you can try your luck for the Lunar New Year. Pull the tiger’s paw to generate your own lucky cat from 5832 combinations of unique artworks produced by 18 designers across our Asia offices. Save, send or share your creation to spread the love!
          <br/><br/>

          <a href="https://support.wwf.org.uk/adopt-a-tiger" target="_blank" rel="noopener noreferrer">https://support.wwf.org.uk/adopt-a-tiger</a>
  `}
          />
        </div>

        <Video
          videoSrc={require('./assets/LuckyTiger/cny_su.mov')}
          orientation={'landscape'}
          caption={`Main page (Web version)`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/LuckyTiger/cny_su2.mp4')}
            orientation={'portrait'}
            caption={`Main page (Mobile version)`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
          <InlineImage
            imgSrc={require('./assets/LuckyTiger/cny_su_social1.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
          <InlineImage
            imgSrc={require('./assets/LuckyTiger/cny_su_social2.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
        </div>
        <FooterNav
          prev={'WPP House'}
          prevSrc={'/wpp-house'}
          next={'Signature Spectrum'}
          nextSrc={'/signature-spectrum'}
        />
      </div>
      <Footer />
    </div>
  );
}
