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

export default function WPPHouse() {
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'WEB DEV & GENERATIVE DESIGN'} title={'WPP House'} />
        <Paragraph
          content={`
          In collaboration, WPP is set to transform Sydney's iconic Powerhouse Museum into the vibrant WPP House during SXSW Sydney. This central hub will serve as a dynamic space for exploring groundbreaking ideas and addressing current and future industry challenges. Throughout the week-long event (15-22 October), WPP House will welcome agencies and partners, fostering creative transformation and offering five days of stimulating discussions, emerging concepts, and open dialogue.

          <br/><br/>

          In my role as a designer and creative technologist at Design Bridge and Partners, our team at Design Bridge and Partners was responsible for the branding and the developing of interactive tools for WPP House.
  `}
        />
        <ImageHero imgSrc={require('./assets/WPPHouse/hero.jpg')} />
        <InfoStrip
          roles={['Creative Developer', 'Visual Designer']}
          teams={['Jessica Tan', 'Paola Demichelis']}
          deliverables={['Event Website', 'Interactive Tools']}
        />

        <Paragraph
          header={'Key Visual'}
          content={`
          A primary deliverable for this project is crafting a generative key visual for WPP House. This visual features a 3D vortex of colorful balls symbolizing the innovation WPP brings. It aims to reshape WPP's image as forward-thinking, approachable, and captivating. This dynamic visual can be integrated into websites as interactive elements. Additionally, it can be exported as still images and GIFs for use in various social content formats during the event.
  `}
        />
        <Video
          videoSrc={require('./assets/WPPHouse/vortex.mov')}
          orientation={'square'}
          caption={`Generative Vortex Animation
`}
        />

        <Paragraph
          header={'Interactive Tools'}
          content={`
          As a part of the branding, the team decided to create several interactive tools for both the participants and in-house content creators to explore. 
  `}
        />
        <Paragraph
          content={`
          Portrait Tool:
          <br/>
The Portrait Tool serves a dual purpose of engaging participants and personalizing their experience with WPP House. Users upload their photos, and the tool transforms these images into dynamic, exploding portraits. The visual impact is not only entertaining but also aligns participants with the dynamic and innovative essence of WPP House. This personalized touch fosters a connection, making participants active contributors to the event's visual narrative.
  `}
        />
        <Video
          videoSrc={require('./assets/WPPHouse/portrait_tool.mov')}
          orientation={'landscape'}
          caption={`Portrait Tool Demo
`}
        />
        <Paragraph
          content={`
          Image Cropping Tool:
          <br/>
Designed with in-house content creation in mind, the Image Cropping Tool streamlines the process to create visual content for each speaker. By allowing them to upload their images and generating a cropped, dotted version, this tool ensures that all visuals associated with speakers harmonize with WPP House's overarching branding for non-designers. This not only maintains visual consistency but also reinforces the distinctive and cohesive identity of WPP House across various speaker-related materials.
  `}
        />
        <Video
          videoSrc={require('./assets/WPPHouse/crop_tool.mov')}
          orientation={'landscape'}
          caption={`Image Cropping Tool Demo
`}
        />

        <Paragraph
          header={'Event Website'}
          content={`
          The dedicated website for the event acts as a digital focal point. Beyond offering essential information about speakers, it serves as an immersive platform. Detailed profiles of speakers generate anticipation and interest. Additionally, the website hosts a showcase of the interactive visuals. This strategic blend of information and interaction encourages exploration, engagement, and sharing. The website becomes an extension of the event, capturing the essence of WPP House and making it accessible to a broader audience, transcending physical boundaries.

<br/><br/>

This holistic approach, encompassing interactive tools and a dynamic website, ensures a multifaceted and engaging experience for participants and online audiences alike, reinforcing WPP House's brand image as innovative, approachable, and captivating.
  `}
        />
        <Video
          videoSrc={require('./assets/WPPHouse/website.mp4')}
          orientation={'landscape'}
          caption={`Website Walkthrough
`}
        />
        <FooterNav
          prev={'Dev'}
          prevSrc={'https://www.notion.so/janecheng/Jane-Cheng-s-Dev-Blog-67e529b49f4845659aff5880ecbe1db8'}
          next={'Lucky Tiger'}
          nextSrc={'/lucky-tiger'}
        />
      </div>
      <Footer />
    </div>
  );
}
