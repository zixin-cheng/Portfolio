import React, { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { ScrollRestoration } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Landing from './LandingPage/Landing';
import ContactInfo from './LandingPage/ContactInfo';
import Projects from './LandingPage/Projects';
import Footer from './components/Footer';
import styles from './ProjectCard/ProjectCard.module.css';
import './styles/global.css';
import Scene from './BackgroundScene/Scene';
import { CameraTimeline } from './BackgroundScene/AnimatedCamera';

/**
Check performance of background scene
 */
// import Stats from 'stats.js';
// const stats = new Stats();
// stats.showPanel(0);
// document.body.appendChild(stats.dom);
// function animate() {
//   stats.begin();
//   stats.end();
//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

/**
 * This function will calculate how much the user has scrolled (0-1)
 * @returns {number} The percentage of how much the user has scrolled (0-1)
 */
function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;
  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  useEffect(() => {
    document.title = 'Jane Cheng';
  }, []);
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();
      // console.log(`Scroll progress: ${progress}`);
      CameraTimeline.progress(scrolled);
      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;
      };
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className={styles.article_wrapper}>
        <ScrollToTop />
        <Landing />
        <Projects />
        <ContactInfo />

        <Scene />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
