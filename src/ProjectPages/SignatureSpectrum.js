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

export default function SignatureSpectrum() {
  useEffect(() => {
    document.title = 'Signature Spectrum — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'WEB & CREATIVE DEV'} title={'Signature Spectrum'} />
        <Paragraph
          content={`
          This project redefines signatures from static marks to dynamic expressions, animating individual traits into living identities. It explores the deep connections between identity, creativity, and visual representation through the curation and signing of signatures, sparking dialogues on human complexity, and celebrating our unique differences.
          `}
        />
        <ImageHero imgSrc={require('./assets/SignatureSpectrum/signature_hero.png')} />
        <Paragraph
          content={`
          For centuries, signatures have served as a symbolic extension of our identity, appearing on contracts, artwork, and personal documents. Signatures have served as more than just a means of authentication; they are reflections of our identities, beliefs, and creativity. 
          <br/><br/>

          Imagine a signature evolving beyond its static form, becoming an animated representation of the individual behind it. This project imagines signatures as living organisms that evolve and change over time, like our personalities and character traits. 

          <br/><br/>

          By infusing signatures with subtle animations and distinct visual styles, each signature takes on a personality and movement, mirroring the diversity and nuances of the individuals they represent. This exploration seeks to redefine how we perceive signatures, turning them into dynamic expressions of identity rather than static marks on paper. 

          <br/><br/>

          Furthermore, this endeavour seeks to challenge conventional notions of signatures as mere legal marks, instead reimagining them as vibrant expressions of identity. It invites viewers to ponder the deeper connections between identity, creativity, and the visual representation of one's persona. 

          <br/><br/>

          Ultimately, this project aims to spark conversations about the multifaceted nature of human identity and the endless possibilities of artistic expression in the digital age.
          `}
        />

        <Video
          videoSrc={require('./assets/SignatureSpectrum/SignatureSpectrum_DemoVid.mp4')}
          orientation={'landscape'}
          caption={`Demo Video`}
          autoplay={'autoplay'}
        />

        <Paragraph
          header={'Log & Analyse'}
          content={`
          The first step of the project involves logging and analyzing user signatures. Using a touchscreen and a stylus pen, the p5 canvas captures and logs every point of the signature in real-time as the user signs it.
        `}
        />
        <Video
          videoSrc={require('./assets/SignatureSpectrum/signature_log.mov')}
          orientation={'landscape'}
          caption={`Signature Capturing Page`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <Paragraph
          content={`
          Once the signatures are complete, the collected data is analyzed using algorithms designed to extract meaningful insights from the raw points. 
          <br/><br/>
          
          For instance, the average distance between points can signify the overall writing speed, while the average angles can reveal the curviness or straightness of the signature. This analyzed data provides a base understanding of the signature's characteristics, which is then used for visualization.
        `}
        />
        <Image
          imgSrc={require('./assets/SignatureSpectrum/signature_analysis.png')}
          orientation={'landscape'}
          caption={'Signature Data & Analysis'}
        />

        <Paragraph
          header={'Stylization'}
          content={`
          During the stylization phase of the project, I conducted extensive experimentation to create various styles that best reflect the analyzed data of the signatures.

          <br/><br/>

          I experimented with various styles that were visually complex and intriguing, but I realized they were drawing too much attention away from the original form of the signature, ultimately distracting from what made each signature unique. As a result, I shifted my focus towards creating various styles of brushes and pens.

          <br/><br/>

          These dynamic brushes were designed to visually enhance the distinctive qualities of the signatures while maintaining a balance that preserved the essence of their original form.
        `}
        />
        <Image
          imgSrc={require('./assets/SignatureSpectrum/signature_brushes.png')}
          orientation={'landscape'}
          caption={'Generated Brush Textures'}
        />

        <Paragraph
          content={`
          These textures are applied to the original signatures based on the characteristics analyzed in the previous stage. The styles serve as variables, visualizing how a brush or pen texture might appear if the person were to sign with ink.
          
          <br/><br/>

          Similarly, animations are applied according to the different qualities of the signature. These animations slightly distort the signatures, making them appear as if they are floating in space, breathing, and moving. This approach allows the signatures to inherit and express different energies from their unique forms.

        `}
        />
        <Video
          videoSrc={require('./assets/SignatureSpectrum/signature_animation.mp4')}
          orientation={'landscape'}
          caption={`Stylized Signature Textures & Animations`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <Paragraph
          header={'Retrieval'}
          content={`
          After the analysis is complete, users can upload and save their signatures into a database. Upon submission, users receive a unique ID to retrieve their signatures on their own devices and watch them come to life. They can choose to view these signatures being redrawn and animated or have them remain in their original form. This feature also allows users to save their stylized signatures as images for personal use.
        `}
        />
        <Video
          videoSrc={require('./assets/SignatureSpectrum/signature_retrieve.mp4')}
          orientation={'landscape'}
          caption={`Submission & Retrieval Page`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        <Paragraph
          header={'Archive'}
          content={`
          The archive screen showcases the newest submitted signatures being drawn and animated with different styles simultaneously. This display highlights the diversity and uniqueness of each signature, all brought to life in one.

          <br/><br/>

All in all, this project aims to delve deeper into exploring the nuances of signatures as reflections of our identities. By infusing technology and creativity, I want to create this tool to reimagine signatures as extensions of ourselves and to celebrate the diversity and richness between all of us.
        `}
        />
        <Video
          videoSrc={require('./assets/SignatureSpectrum/signature_archive.mp4')}
          orientation={'landscape'}
          caption={`Archive Page`}
          autoplay={'autoplay'}
          muted={'muted'}
          loop={'loop'}
        />

        {/* <div className={styles.imgstrip_wrapper}>
          <Image
            imgSrc={require('./assets/SignatureSpectrum/cny_su_social1.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
          <Image
            imgSrc={require('./assets/SignatureSpectrum/cny_su_social2.png')}
            orientation={'portrait'}
            caption={'Social Media & Skin Design'}
          />
        </div> */}
        <FooterNav prev={'Lucky Tiger'} prevSrc={'/lucky-tiger'} next={'2022 Demo Reel'} nextSrc={'/2022-demo-reel'} />
      </div>
      <Footer />
    </div>
  );
}
