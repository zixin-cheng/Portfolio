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

export default function Arium() {
  useEffect(() => {
    document.title = 'Arium Networks — Jane Cheng';
  }, []);
  useEqualizeImgstripHeights('.' + styles.imgstrip_wrapper.replace(/\s+/g, '.'));
  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <IntroStrip tags={'MOTION BRANDING & WEB DESIGN'} title={'Arium Networks'} />
        <Paragraph
          content={`
          Arium Networks is an independent wireless infrastructure partner built for what's next in connectivity-and powered by the teams already delivering it. Formerly Crown Castle's Small Cells business, Arium brings decades of experience helping carriers, venues, and cities expand network capacity faster, smarter, and with less disruption. Now operating independently, the company is more focused, more flexible, and better positioned to meet accelerating demand.`}
        />
      </div>
      <ImageHero imgSrc={require('./assets/Arium/hero.png')} />

      <div className={`${styles.content_wrapper} ${styles.bottom}`}>
        <div className={styles.intro_p_wrapper}>
          <InfoStrip
            roles={['Motion Design', 'Visual Design']}
            tools={['After Effects', 'Cinema 4D']}
            // teams={['Kiu Y', 'Garrett Majewski']}
            deliverables={['Brand System', 'Website']}
          />
          <Paragraph
            header={'Branding'}
            content={`
          Centered on the principle of clarity above all, this branding system transforms complexity into focused, intuitive communication. A refined visual language combines structure, precision, and warmth to express expertise with confidence while fostering an inspired and welcoming brand experience.`}
          />
        </div>
        <Video
          videoSrc={require('./assets/Arium/animatedlogo.mp4')}
          orientation={'landscape'}
          caption={`Animated Logo`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />
        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/Arium/color.mp4')}
            orientation={'landscape'}
            caption={`Color Palette`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <InlineVideo
            videoSrc={require('./assets/Arium/type.mp4')}
            orientation={'landscape'}
            caption={`Typography`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <InlineVideo
            videoSrc={require('./assets/Arium/gradientanimation.mp4')}
            orientation={'landscape'}
            caption={`Gradient Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        {/* <Paragraph
          content={`
            <b>GRADIENT</b><br/>
            A signature visual element, the gradient blends Sky Teal and Midnight Blue to represent dynamic connectivity and stable infrastructure, bringing depth and movement to the brand.
          `}
        /> */}
        {/* 
        <Image imgSrc={require('./assets/Arium/gradient.png')} orientation={'landscape'} caption={'Gradient'} /> */}
        {/* 
        <Paragraph
          content={`
            <b>ILLUSTRATIONS</b><br/>
            A series of abstract technical illustrations brings wireless infrastructure to life, translating complex technology into approachable, engaging visuals.
          `}
        /> */}
        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/Arium/connection.mp4')}
            orientation={'landscape'}
            caption={`"Connection"`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <InlineVideo
            videoSrc={require('./assets/Arium/innovation.mp4')}
            orientation={'landscape'}
            caption={`"Innovation"`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        {/* <Paragraph
          content={`
            <b>DATA VISUALIZATION</b><br/>
            It is important that we communicate data clearly. These visuals demonstrate the style that should be adopted for our custom graphs and maps—minimal and 1 to 2 colors.
          `}
        /> */}
        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/Arium/graph.mp4')}
            orientation={'landscape'}
            caption={`Graph Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <InlineVideo
            videoSrc={require('./assets/Arium/stats.mp4')}
            orientation={'landscape'}
            caption={`Stats Animation`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        {/* <Paragraph
          header={'Web Design'}
          content={`
          The website extends the full branding system into a cohesive digital experience, bringing together typography, gradients, illustrations, and motion. An interactive landing experience transforms the signature gradient into a dynamic shader-driven visualization, adding depth and interactivity to the brand."
        `}
        /> */}
        <Image
          imgSrc={require('./assets/Arium/websitemockup.png')}
          orientation={'landscape'}
          caption={'Landing Page'}
        />

        <Video
          videoSrc={require('./assets/Arium/websiterecording.mp4')}
          orientation={'landscape'}
          caption={`Landing Page Interaction`}
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
