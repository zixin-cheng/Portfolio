import { useEffect, useState } from 'react';

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

export default function Colaj() {
  useEffect(() => {
    document.title = 'Colaj — Jane Cheng';
  }, []);
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const PASSWORD = 'l'; // change this constant to set a different password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd === PASSWORD) {
      setUnlocked(true);
    } else {
      setError('Incorrect password');
    }
  };

  if (!unlocked) {
    return (
      <div
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
      >
        <div
          style={{
            maxWidth: 480,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            padding: 24,
            borderRadius: 8,
            gap: 16,
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
          }}
        >
          <p>Please enter the password to view this project.</p>
          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <input
              type="password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
                setError('');
              }}
              style={{
                width: '100%',
                padding: 8,
                marginBottom: 8,
                textAlign: 'center',
              }}
              aria-label="password"
            />
            <button type="submit" className="submitButton">
              Enter
            </button>
            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'BRANDING & PRODUCT DESIGN'} title={'Colaj.ai'} />
        <Paragraph
          content={`
          Colaj is an AI powered tool to enable active learning by creating a more engaging classroom environment with built-in cues and real-time feedback loops on comprehension, making it easier for instructors to meet students where they are.`}
        />
        <ImageHero imgSrc={require('./assets/Colaj/colaj_hero.png')} />
        <InfoStrip
          roles={['Brand Designer', 'Product Designer']}
          teams={['John Rothenberg', 'Eric Gunther']}
          deliverables={['Brand Design', 'Product Design']}
        />
        <Paragraph
          header={'Brand Identity'}
          content={`The Colaj brand identity is built around creativity, connection, and engagement—reflecting its mission to make learning more interactive and responsive. The logo and visual system embody the platform’s real-time feedback loops, intuitive collaboration, and seamless instructor–student connection, positioning Colaj as a leader in active, AI-powered learning.`}
        />
        <Image imgSrc={require('./assets/Colaj/logos.png')} orientation={'landscape'} caption={'Logo'} />
        <Video
          videoSrc={require('./assets/Colaj/colaj_reel.mp4')}
          orientation={'landscape'}
          muted={'muted'}
          autoplay={'autoplay'}
          caption={`Demo Reel`}
        />
        <div className={styles.imgstrip_wrapper} style={{ width: '70%' }}>
          <Image
            imgSrc={require('./assets/Colaj/businesscard.png')}
            orientation={'landscape'}
            caption={'Business Card'}
          />
          <Image imgSrc={require('./assets/Colaj/tote.png')} orientation={'landscape'} caption={'Tote Bag'} />
        </div>
        <Paragraph
          header={'Product Design'}
          content={`
          The product design system for Colaj is built to perform seamlessly across every classroom surface, from front-of-class projectors and smart boards to laptops and mobile devices. A unified visual logic, responsive interaction patterns, and clear information hierarchy ensure that instructors and students experience the same intuitive, engaging interface no matter where they are or what they’re using.
        `}
        />
        <Image imgSrc={require('./assets/Colaj/studentview.png')} orientation={'landscape'} caption={'Classroom'} />
        <Paragraph
          content={`
          <b>FRONT-OF-CLASS</b><br/>
          The front-of-class display provides a shared view of AI-generated key terms, giving both instructors and students an at-a-glance understanding of overall comprehension and class performance.
        `}
        />
        <Image
          imgSrc={require('./assets/Colaj/assistant.png')}
          orientation={'landscape'}
          caption={'Front-of-Class Design'}
        />
        <Paragraph
          content={`
          <b>INSTRUCTORS</b><br/>
          For instructors, Colaj provides two complementary interfaces: a robust desktop page with full functionality for reviewing comprehension, questions, and session tools; and a streamlined smart-board widget focused on real-time essentials—participant numbers, voice detection, join code, and alerts for new key concepts.
        `}
        />
        <Image
          imgSrc={require('./assets/Colaj/instructor.png')}
          orientation={'landscape'}
          caption={'Instructor Screen Design'}
        />
        <Paragraph
          content={`
          <b>STUDENTS</b><br/>
          For students, a single responsive webpage adapts across laptops, tablets, and mobile devices, ensuring a consistent and accessible experience on any personal screen.
        `}
        />
        <Image
          imgSrc={require('./assets/Colaj/student.png')}
          orientation={'landscape'}
          caption={'Student Screen Design'}
        />

        <FooterNav prev={'TapType'} prevSrc={'/taptype'} next={'Hearts & Bones'} nextSrc={'/hearts-and-bones'} />
      </div>
      <Footer />
    </div>
  );
}
