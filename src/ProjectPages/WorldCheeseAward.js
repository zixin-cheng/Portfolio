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

export default function WorldCheeseAward() {
  useEffect(() => {
    document.title = 'World Cheese Award — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'BRANDING & MOTION DESIGN'} title={'World Cheese Award'} />
        <Paragraph
          content={`
          World Cheese Award is an annual conference that takes place in New York City each year. The conference invites cheesemakers, celebrity chefs, food experts, restaurants and more with special events throughout six days.`}
        />
        <ImageHero imgSrc={require('./assets/WorldCheeseAward/worldcheeseaward_hero.png')} />
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

        <Video
          videoSrc={require('./assets/WorldCheeseAward/LOGO.mp4')}
          orientation={'landscape'}
          caption={`Animated Logo`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />
        <Image
          imgSrc={require('./assets/WorldCheeseAward/Brand Guideline1.png')}
          orientation={'landscape'}
          caption={'Typography Guidelines'}
        />
        <Image
          imgSrc={require('./assets/WorldCheeseAward/Brand Guideline2.png')}
          orientation={'landscape'}
          caption={'Color Guidelines'}
        />

        <Paragraph
          header={'Event Visuals'}
          content={`
          For other visuals for the World Cheese Award, a video and a series of posters are created for promotional use, and a set of short videos is designed for stage graphics used during the event.
        `}
        />
        <Image
          imgSrc={require('./assets/WorldCheeseAward/Storyboard.jpg')}
          orientation={'landscape'}
          caption={'Storyboard'}
        />
        <Video
          videoSrc={require('./assets/WorldCheeseAward/TitleSequence.mp4')}
          orientation={'landscape'}
          caption={`Promotional Video (with audio)`}
        />
        <Image
          imgSrc={require('./assets/WorldCheeseAward/busStopPoster.jpg')}
          orientation={'landscape'}
          caption={'Event Poster'}
        />
        <Image
          imgSrc={require('./assets/WorldCheeseAward/compile_poster.jpg')}
          orientation={'landscape'}
          caption={'Event Poster'}
        />
        <div className={styles.imgstrip_wrapper} style={{ width: '70%' }}>
          <Video
            videoSrc={require('./assets/WorldCheeseAward/program list.mp4')}
            orientation={'landscape'}
            caption={`Stage Graphics - Program List`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />

          <Video
            videoSrc={require('./assets/WorldCheeseAward/CurrentEvent.mp4')}
            orientation={'landscape'}
            caption={`Stage Graphics - Current Event`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        <Video
          videoSrc={require('./assets/WorldCheeseAward/StageUpNext.mp4')}
          orientation={'landscape'}
          caption={`Stage Graphics - Up Next`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />
        <Video
          videoSrc={require('./assets/WorldCheeseAward/InsStory.mp4')}
          orientation={'portrait'}
          caption={`Instagram Promotional Story`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <FooterNav prev={'TapType'} prevSrc={'/taptype'} next={'Hearts & Bones'} nextSrc={'/hearts-and-bones'} />
      </div>
      <Footer />
    </div>
  );
}
