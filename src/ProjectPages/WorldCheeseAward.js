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

export default function WorldCheeseAward() {
  useEffect(() => {
    document.title = 'World Cheese Award — Jane Cheng';
  }, []);
  useEqualizeImgstripHeights('.' + styles.imgstrip_wrapper.replace(/\s+/g, '.'));

  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <IntroStrip tags={'BRANDING & MOTION DESIGN'} title={'World Cheese Award'} />
        <Paragraph
          content={`
          World Cheese Award is an annual conference that takes place in New York City each year. The conference invites cheesemakers, celebrity chefs, food experts, restaurants and more with special events throughout six days.`}
        />
      </div>
      <ImageHero imgSrc={require('./assets/WorldCheeseAward/worldcheeseaward_hero.png')} />
      <div className={`${styles.content_wrapper} ${styles.bottom}`}>
        <div className={styles.intro_p_wrapper}>
          <InfoStrip
            roles={['Designer']}
            teams={[]}
            deliverables={['Logo', 'Key Visuals', 'Posters', 'Event Reel', 'Event Visuals']}
          />
          <Paragraph
            header={'Logo & Brand Guideline'}
            content={`
          To create a modern yet classic brand image for the World Cheese Award, simplistic design is created incorporation with a light texture to show the artisanship and beauty of cheesemaking and cheeses.
            `}
          />
        </div>

        <Video
          videoSrc={require('./assets/WorldCheeseAward/LOGO.mp4')}
          orientation={'landscape'}
          caption={`Animated Logo`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />
        <div className={styles.imgstrip_wrapper}>
          <InlineImage
            imgSrc={require('./assets/WorldCheeseAward/Brand Guideline1.png')}
            orientation={'landscape'}
            caption={'Typography Guidelines'}
          />
          <InlineImage
            imgSrc={require('./assets/WorldCheeseAward/Brand Guideline2.png')}
            orientation={'landscape'}
            caption={'Color Guidelines'}
          />
          <InlineImage
            imgSrc={require('./assets/WorldCheeseAward/Storyboard.jpg')}
            orientation={'landscape'}
            caption={'Storyboard'}
          />
        </div>

        {/* <Paragraph
          header={'Event Visuals'}
          content={`
          For other visuals for the World Cheese Award, a video and a series of posters are created for promotional use, and a set of short videos is designed for stage graphics used during the event.
        `}
        /> */}

        <Video
          videoSrc={require('./assets/WorldCheeseAward/TitleSequence.mp4')}
          orientation={'landscape'}
          controls={'controls'}
          autoplay={'autoplay'}
          muted={'muted'}
          caption={`Promotional Video (with audio)`}
        />
        <div className={styles.imgstrip_wrapper}>
          <InlineImage
            imgSrc={require('./assets/WorldCheeseAward/busStopPoster.jpg')}
            orientation={'landscape'}
            caption={'Event Poster'}
          />
          <InlineImage
            imgSrc={require('./assets/WorldCheeseAward/compile_poster.jpg')}
            orientation={'landscape'}
            caption={'Event Poster'}
          />
        </div>
        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/WorldCheeseAward/program list.mp4')}
            orientation={'landscape'}
            caption={`Stage Graphics - Program List`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <InlineVideo
            videoSrc={require('./assets/WorldCheeseAward/CurrentEvent.mp4')}
            orientation={'landscape'}
            caption={`Stage Graphics - Current Event`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        <div className={styles.imgstrip_wrapper}>
          <InlineVideo
            videoSrc={require('./assets/WorldCheeseAward/StageUpNext.mp4')}
            orientation={'landscape'}
            caption={`Stage Graphics - Up Next`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
          <InlineVideo
            videoSrc={require('./assets/WorldCheeseAward/InsStory.mp4')}
            orientation={'portrait'}
            caption={`Instagram Promotional Story`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>
        <FooterNav prev={'TapType'} prevSrc={'/taptype'} next={'Hearts & Bones'} nextSrc={'/hearts-and-bones'} />
      </div>
      <Footer />
    </div>
  );
}
