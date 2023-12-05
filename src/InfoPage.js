import Navigationbar from './components/NavigationBar';
import Image from './ProjectPages/components/Image';
import InfoStrip from './ProjectPages/components/InfoStrip';
import Paragraph from './ProjectPages/components/Paragraph';
import styles from './ProjectPages/ProjectPage.module.css';

export default function InfoPage() {
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <div className={styles.infoPage_wrapper}>
          <Image imgSrc={require('./assets/profilepic.jpg')} orientation={'portrait'} caption={''} />
          <Paragraph
            content={`
          I'm a creative technologist based in New York, dedicated to crafting immersive experiences that seamlessly blend technology and design. While my expertise lies in motion design, I also explore a wide range of mediums, including XR and interactive web pages. Over the course of my career, I've had the privilege of collaborating with renowned companies like Intel, Volkswagen, Infosys, Tecent, Wix.com, and more.

          ​<br/>​<br/>
          
          Currently, I am pursuing a master's degree at NYU's Interactive Telecommunications Program, where I delve into the realms of interactive web-based art and generative design. By pushing the boundaries of creative technology, my aim is to create innovative solutions that not only inspire but also evoke a sense of wonder. I'm driven by the belief that technology can be a powerful tool for storytelling and expression, and I'm passionate about harnessing its potential to craft meaningful experiences.
          
          ​<br/>​<br/>

          <a href="https://drive.google.com/file/d/1rc_fPOzaupAJ2Ocr4vcIuLvgSZM99OX7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Full Resume</a>
          `}
          />
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.info_column}>
            <h1>Experience</h1>
            <ul>
              <li>
                <p>{'Design Bridge and Partners, Digital Designer, 2022–Present'}</p>
                <p>{'Freelance, Designer, 2016–Present'}</p>
                <p>{'AIA, User Acceptance Tester Intern, 2020'}</p>
                <p>{'Wix.com, Web Design Intern at Wix Playground, 2019'}</p>
              </li>
            </ul>
          </div>

          <div className={styles.info_column}>
            <h1>Clients</h1>
            <ul>
              <li>
                <p>{'China Duty Free Group'}</p>
                <p>{'CMBC'}</p>
                <p>{'Great Eastern'}</p>
                <p>{'Infosys'}</p>
                <p>{'Intel'}</p>
                <p>{'PropertyGuru'}</p>
                <p>{'Resorts World Sentosa'}</p>
                <p>{'Singapore Science Park'}</p>
                <p>{'Singapore Tourism Board'}</p>
                <p>{'Tecent'}</p>
                <p>{'Teladoc'}</p>
                <p>{'Universal Music Group'}</p>
                <p>{'Volkswagen'}</p>
                <p>{'WPP'}</p>
              </li>
            </ul>
          </div>

          <div className={styles.info_column}>
            <h1>Skills</h1>
            <ul>
              <li>
                <p>{'Branding'}</p>
                <p>{'Motion Design'}</p>
                <p>{'UI/UX'}</p>
                <p>{'Prototyping'}</p>
                <p>{'Front-end Web Development'}</p>
                <p>{'Generative Design'}</p>
                <p>{'Visual Design'}</p>
                <p>{'Usability Testing'}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
