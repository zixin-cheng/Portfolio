import IntroStrip from './components/IntroStrip';
import Navigationbar from '../components/NavigationBar';
import Paragraph from './components/Paragraph';
import Video from './components/Video';
import FooterNav from './components/FooterNav';

import styles from './ProjectPage.module.css';

export default function DemoReel() {
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'MOTION DESIGN & CREATIVE CODING'} title={'2022 Demo Reel'} />
        <Paragraph
          header={'Generative Design Reel'}
          content={`
          Take a look at a collection of experimental generative designs I've created throughout the past year. Check out my <a href="https://www.janechengdesign.com/itpblog" target="_blank" rel="noopener noreferrer">blog page</a> for detailed descriptions and processes.
  `}
        />

        <Video
          videoSrc={require('./assets/DemoReel/Generative Design.mp4')}
          orientation={'landscape'}
          caption={`Generative Design Reel
`}
        />

        <Paragraph
          header={'2D/3D Motion Design Reel'}
          content={`
          Please enjoy a selection of motion design projects that I've worked on this year! Most of these works are freelance projects for Superunion with clients such as Singapore Brand Office, Great Eastern, CDF, Volkswagen, etc.
  `}
        />

        <Video
          videoSrc={require('./assets/DemoReel/2022MotionReel.mp4')}
          orientation={'landscape'}
          caption={`2022 Demo Reel
`}
        />
        <FooterNav prev={'Lucky Tiger'} prevSrc={'/lucky-tiger'} next={'TapType'} nextSrc={'/taptype'} />
      </div>
    </div>
  );
}
