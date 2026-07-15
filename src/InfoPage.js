import { useEffect } from 'react';

import Navigationbar from './components/NavigationBar';
import Image from './ProjectPages/components/Image';
import Paragraph from './ProjectPages/components/Paragraph';
import Footer from './components/Footer';

import styles from './ProjectPages/ProjectPage.module.css';

export default function InfoPage() {
  useEffect(() => {
    document.title = 'Info — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        {/* <div className={styles.infoPage_wrapper}> */}
        {/* <Image imgSrc={require('./assets/profilepic.jpg')} orientation={'portrait'} caption={''} /> */}
        <Paragraph
          content={`
          I'm a designer based in New York, dedicated to crafting immersive experiences that seamlessly blend technology and design. While my expertise lies in motion design, I also explore a wide range of mediums, including AR and interactive web experiences. Over the course of my career, I've had the privilege of collaborating with renowned companies like Intel, Volkswagen, Infosys, Tecent, Wix.com, and more.

          ​<br/>​<br/>
          
          Currently, I'm working as a Creative Developer at SOSO, where I delve into the realms of branding and generative design. By pushing the boundaries of creative technology, my aim is to create innovative solutions that not only inspire but also evoke a sense of wonder. I'm driven by the belief that technology can be a powerful tool for storytelling and expression, and I'm passionate about harnessing its potential to craft meaningful experiences.
          
          ​<br/>​<br/>

          <a href="https://drive.google.com/file/d/1rc_fPOzaupAJ2Ocr4vcIuLvgSZM99OX7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Full Resume</a>
          `}
        />
        {/* </div> */}
        <div className={styles.info_wrapper}>
          <div className={styles.info_column}>
            <h1>Experience</h1>
            <ul>
              <li style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <p style={{ fontWeight: '600' }}>SOSO</p>
                  <p>Creative Technologist, 2024–Present</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600' }}>Freelance</p>
                  <p>Designer, 2016–Present</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600' }}>Design Bridge and Partners</p>
                  <p>Digital Designer (Full-time & Freelance), 2022–2024</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600' }}>AIA</p>
                  <p>User Tester Intern, 2020</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600' }}>Wix.com</p>
                  <p>Web Design Intern at Wix Playground, 2019</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.info_column}>
            <h1>Clients</h1>
            <ul>
              <li>
                <p>{'Amazon'}</p>
                <p>{'Boston Scientific'}</p>
                <p>{'China Duty Free Group'}</p>
                <p>{'Colaj.ai'}</p>
                <p>{'BNP Paribas'}</p>
                <p>{'China Minsheng Bank'}</p>
                <p>{'CMBC'}</p>
                <p>{'Great Eastern'}</p>
                <p>{'Lincoln Center'}</p>
                <p>{'Infosys'}</p>
                <p>{'Intel'}</p>
                <p>{'Northeastern University'}</p>
                <p>{'PropertyGuru'}</p>
                <p>{'Resorts World Sentosa'}</p>
                <p>{'Singapore Science Park'}</p>
                <p>{'Singapore Tourism Board'}</p>
                <p>{'Tecent'}</p>
                <p>{'Teladoc'}</p>
                <p>{'Universal Music Group'}</p>
                <p>{'Volkswagen'}</p>
                <p>{'WPP'}</p>
                <p>{'Wix.com'}</p>
              </li>
            </ul>
          </div>

          {/* <div className={styles.info_column}>
            <h1>Skills</h1>
            <ul>
              <li>
                <p>{'Branding'}</p>
                <p>{'Motion Design'}</p>
                <p>{'Front-end Web Development'}</p>
                <p>{'Generative Design'}</p>
                <p>{'UI/UX'}</p>
                <p>{'Prototyping'}</p>
                <p>{'Visual Design'}</p>
                <p>{'Usability Testing'}</p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
