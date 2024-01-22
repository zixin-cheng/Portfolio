import { useEffect } from 'react';

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

export default function TapType() {
  useEffect(() => {
    document.title = 'TapType — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'CREATIVE CODING'} title={'TapType'} />

        <Paragraph
          content={`
          TapType is an ongoing exploration of generative typography, where I delve into various projects to create captivating and innovative designs. Each unique tool within this series empowers users to engage in playful experimentation, allowing for endless possibilities and creative expression.
  `}
        />

        <Paragraph
          header={'#1 Barbed'}
          content={`Words are linguistic arrows, carefully crafted to pierce the heart and inflict emotional pain. With their sharp edges and biting tone, they leave wounds that are not easily forgotten, reminding us of the power and impact of our choice of words.

          ​<br/><br/>
          
          Test out this tool <a href="https://zixin-cheng.github.io/TypeTool/" target="_blank" rel="noopener noreferrer">here</a> (beta version).
  `}
        />

        <Video
          videoSrc={require('./assets/TapType/Barbed.mp4')}
          orientation={'landscape'}
          caption={`Barbed Demo Video`}
        />

        <Paragraph
          header={'#2 Pixel Perfect'}
          content={`In an era where digital visuals dominate, the importance of pixels and resolution cannot be overstated, as they significantly impact the way we perceive and engage with digital content. 

          <br/><br/>

          This tool is currently still in development. Check out the demos below.`}
        />
        <div className={styles.imgstrip_wrapper}>
          <Video videoSrc={require('./assets/TapType/月.mov')} orientation={'square'} caption={`月`} loop={'loop'} />
          <Video
            videoSrc={require('./assets/TapType/海市蜃楼.mov')}
            orientation={'square'}
            caption={`海市蜃楼`}
            loop={'loop'}
          />
          <Video videoSrc={require('./assets/TapType/SP.mov')} orientation={'square'} caption={`SP`} loop={'loop'} />
          <Video
            videoSrc={require('./assets/TapType/tomato.mov')}
            orientation={'square'}
            caption={`TOMATO`}
            loop={'loop'}
          />
          <Video videoSrc={require('./assets/TapType/EGG.mp4')} orientation={'square'} caption={`EGG`} loop={'loop'} />
        </div>

        <Paragraph
          header={'#3 Typographic Brush'}
          content={`Hand writing is a dynamic and expressive art form that captures unique style and emotions through deliberate brush movements, creating visually captivating compositions. 

          <br/><br/>

          This tool is currently still in development. Check out the demos below.`}
        />
        <div className={styles.imgstrip_wrapper}>
          <Video videoSrc={require('./assets/TapType/Brush.mp4')} orientation={'square'} caption={`Brush`} />
          <Video videoSrc={require('./assets/TapType/笔画.mp4')} orientation={'square'} caption={`笔画`} />
          <Video
            videoSrc={require('./assets/TapType/iPad Brush.mp4')}
            orientation={'portrait'}
            caption={`Ipad Brush`}
          />
        </div>
        <FooterNav prev={'K-5'} prevSrc={'/k5'} next={'World Cheese Award'} nextSrc={'/world-cheese-award'} />
      </div>
      <Footer />
    </div>
  );
}
