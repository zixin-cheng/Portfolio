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

export default function Quilt() {
  useEffect(() => {
    document.title = 'Quilt — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'BRANDING & PRODUCT DESIGN'} title={'Quilt'} />
        <Paragraph
          content={`
          Quilt is a modern data and analytics platform dedicated to transforming fragmented, raw data into unified, actionable intelligence. It serves businesses looking to find meaningful patterns in massive datasets.`}
        />
        <ImageHero imgSrc={require('./assets/Quilt/hero.png')} />
        <InfoStrip roles={['Designer']} teams={[]} deliverables={['Brand System', 'UI System']} />
        <Paragraph
          header={'Branding'}
          content={`
          Transforming fragmented data into unified insight, this branding system uses a tessellated pixel/digital patchwork aesthetic. This style balances precise digital geometry with a sense of handcrafted artistry to convey the meticulous "assembly" of complex patterns into actionable business intelligence.`}
        />

        <Video
          videoSrc={require('./assets/Quilt/animatedlogo.mp4')}
          orientation={'landscape'}
          caption={`Animated Logo`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />
        <div className={styles.imgstrip_wrapper} style={{ width: '90%' }}>
          <Image
            imgSrc={require('./assets/Quilt/insstory.png')}
            orientation={'landscape'}
            caption={'Social Media Visuals'}
          />

          <Video
            videoSrc={require('./assets/Quilt/blockanimation.mp4')}
            orientation={'landscape'}
            caption={`Block Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>
        <div className={styles.imgstrip_wrapper} style={{ width: '90%' }}>
          <Video
            videoSrc={require('./assets/Quilt/3dstats.mp4')}
            orientation={'landscape'}
            caption={`3D Stats Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
          <Video
            videoSrc={require('./assets/Quilt/3dpaper.mp4')}
            orientation={'landscape'}
            caption={`3D Stats Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        <Paragraph
          header={'UI Design'}
          content={`
          The UI approach involved designing a clean, intuitive layout and a comprehensive design system where all data visualization elements (charts, graphs, and widgets). The system also includes motion studies for key UI interactions and micro-animations for digital screens."
        `}
        />
        <Image imgSrc={require('./assets/Quilt/landingpage.png')} orientation={'landscape'} caption={'Landing Page'} />
        {/* <Image
          imgSrc={require('./assets/Quilt/dashboard_mockup3.png')}
          orientation={'landscape'}
          caption={'Landing Page'}
        /> */}
        <div className={styles.imgstrip_wrapper} style={{ width: '90%' }}>
          <Video
            videoSrc={require('./assets/Quilt/piechart.mov')}
            orientation={'portrait'}
            caption={`Pie Chart Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
          <Video
            videoSrc={require('./assets/Quilt/linechart.mp4')}
            orientation={'portrait'}
            caption={`Line Chart Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        <Video
          videoSrc={require('./assets/Quilt/barchart.mp4')}
          orientation={'landscape'}
          caption={`Bar Chart Animation`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <FooterNav prev={'Colaj.ai'} prevSrc={'/colaj'} next={'Motion Reel'} nextSrc={'/motion-reel'} />
      </div>
      <Footer />
    </div>
  );
}
