import IntroStrip from './components/IntroStrip';
import Navigationbar from '../components/NavigationBar';
import Paragraph from './components/Paragraph';
import ImageHero from './components/ImageHero';
import InfoStrip from './components/InfoStrip';
import Video from './components/Video';
import Image from './components/Image';
import FooterNav from './components/FooterNav';
import Footer from '../components/Footer';

import styles from './ProjectPage.module.css';

export default function LuckyTiger() {
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'WEB DEV & DESIGN'} title={'Happy Year of Tiger'} />
        <Paragraph
          content={`
    This is an in-house project created under the internship with Superunion for the 2022 Chinese New Year. 
    <br/><br/>
    My main role includes assisting in designing UI assets and front-end development with HTML/CSS and Three.js.
  `}
        />
        <ImageHero imgSrc={require('./assets/LuckyTiger/luckytiger_hero.jpeg')} />
        <InfoStrip
          roles={['Frontend Development', 'Visual Designer']}
          teams={['Jessica Tan', 'Paola Demichelis']}
          deliverables={['Interactive Website']}
        />
        <Paragraph
          content={`
          Did you know that in Chinese a slot machine is called a ‘tiger machine’?
          <br/><br/>
          With that in mind, we’ve created our own so you can try your luck for the Lunar New Year. Pull the tiger’s paw to generate your own lucky cat from 5832 combinations of unique artworks produced by 18 designers across our Asia offices. Save, send or share your creation to spread the love!
          <br/><br/>
          Wishing you good fortune and a happy, healthy start to the New Year.
          While you save your tiger as a PNG, why not save tigers in the wild too? Donate to WWF and help reverse the fortune of these unlucky cats – the only endangered animal in the Chinese zodiac.
          <br/><br/>
    <a href="https://support.wwf.org.uk/adopt-a-tiger" target="_blank" rel="noopener noreferrer">https://support.wwf.org.uk/adopt-a-tiger</a>
  `}
        />
        {/* <video width="320" height="240" controls src={require('./assets/LuckyTiger/cny_su.mov')}></video> */}

        <Video
          videoSrc={require('./assets/LuckyTiger/cny_su.mov')}
          orientation={'landscape'}
          caption={`Main page (Web version)
`}
        />
        <Video
          videoSrc={require('./assets/LuckyTiger/cny_su2.mp4')}
          orientation={'portrait'}
          caption={`Main page (Mobile version)
`}
        />
        <div className={styles.imgstrip_wrapper}>
          <Image
            imgSrc={require('./assets/LuckyTiger/cny_su_social1.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
          <Image
            imgSrc={require('./assets/LuckyTiger/cny_su_social2.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
        </div>
        <FooterNav prev={'WPP House'} prevSrc={'/wpp-house'} next={'2022 Demo Reel'} nextSrc={'/2022-demo-reel'} />
      </div>
      <Footer />
    </div>
  );
}
