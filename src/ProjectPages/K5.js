import { useEffect } from 'react';

import IntroStrip from './components/IntroStrip';
import Navigationbar from '../components/NavigationBar';
import Paragraph from './components/Paragraph';
import Video from './components/Video';
import FooterNav from './components/FooterNav';
import Footer from '../components/Footer';

import styles from './ProjectPage.module.css';

export default function K5() {
  useEffect(() => {
    document.title = 'K-5 — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'WEB DEV'} title={'K-5'} />

        <Paragraph
          content={`
          This visual journalism project illuminates the deployment of a new robot by the NYPD in the Times Square subway station. Utilizing a scroll interaction combined with 3D graphics on a webpage, the project delves into the implications surrounding this robotic presence. As a creative developer, my responsibility is to ensure that the visuals harmonize with the article content and offer a seamless interactive experience as users scroll through the webpage.
          <br><br>
          Explore the documentation page <a href="https://www.notion.so/janecheng/K-5-b5a9634fea604c2ea77eea094ec05a0d?pvs=4" target="_blank" rel="noopener noreferrer">here</a>.`}
        />

        <Video videoSrc={require('./assets/K5/k-5.mp4')} orientation={'landscape'} caption={`Screen Recording`} />

        <FooterNav prev={'2022 Motion Reel'} prevSrc={'/2022-demo-reel'} next={'TapType'} nextSrc={'/taptype'} />
      </div>
      <Footer />
    </div>
  );
}
