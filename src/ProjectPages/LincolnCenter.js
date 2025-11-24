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

export default function LincolnCenter() {
  useEffect(() => {
    document.title = 'Lincoln Center — Jane Cheng';
  }, []);
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const PASSWORD = 'portfolio2025'; // change this constant to set a different password

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
        <IntroStrip tags={'BRANDING & MOTION DESIGN'} title={'Lincoln Center Infoscape'} />
        <Paragraph
          content={`
          The Lincoln Center Infoscape transforms the campus into a network of digital canvases that amplify the institution’s artistic excellence, turning everyday moments into extraordinary encounters with performance. Its unified yet flexible infrastructure enriches visitor journeys, empowers creators, and seamlessly connects people to the vibrant heart of the arts.`}
        />
        <ImageHero imgSrc={require('./assets/LincolnCenter/lc_hero.png')} />
        <InfoStrip
          roles={['Motion Designer', 'Developer']}
          teams={['Aya Abdallah', 'Yaxuan Liu', 'Janet Chan (WSDIA)', 'Jonathan Jackson (WSDIA)']}
          deliverables={['Brand System', 'Motion System', 'Generative Design']}
        />
        <Paragraph
          header={'Concept Direction'}
          content={`
          The Infoscape concept embodies a dual nature: multifaceted in its capabilities while singularly illuminating Lincoln Center as the preeminent cultural hub. Refining a complex system into a dynamic stage.
            `}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/screensystems.png')}
          orientation={'landscape'}
          caption={'Layout System'}
        />

        <Paragraph
          header={'Blades'}
          content={`
          The 13 blades form a city-block-scale digital canvas, using bold, rhythmic motion to capture attention from a distance while revealing denser information up close. Designed for quick, transitional audiences, the system prioritizes reusable marketing assets, consistent QR functionality, minimal Lincoln Center branding, and persistent spatial cues—while avoiding detailed wayfinding.
        `}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/blades_mockup.png')}
          orientation={'landscape'}
          caption={'Blades Design'}
        />
        <Paragraph
          content={`
          <b>DAILY LOOP</b><br/>
          The daily loop privileges constituent promotional content, providing multiple opportunities a day for each constituent to have an immersive wow moment across all the blades.
          It alternates between higher density configurations and block long gestures.
          It periodically brings in Lincoln Center Umbrella content to maintain cohesion of all the constituents into a single Lincoln Center organization and campus.
        `}
        />
        <Video
          videoSrc={require('./assets/LincolnCenter/blades_motion_short.mp4')}
          orientation={'landscape'}
          autoplay={'autoplay'}
          caption={`Daily Loop Sample Clip (2x speed)`}
        />
        <Paragraph
          content={`
          A dynamic preview software is also developed to preview the compositions and sequences in motion, standing and moving through real locations on campus.
        `}
        />
        <Video
          videoSrc={require('./assets/LincolnCenter/prototypedemo.mp4')}
          orientation={'landscape'}
          caption={`3D View Prototype`}
        />

        <Paragraph
          content={`
          <b>DAILY ART MOMENT</b><br/>
          The Infoscape Blades introduce moments of wonder into the city, offering passersby a pause from the everyday while extending Lincoln Center’s artistic identity into public space. Each evening, a generative performance maps the real-time position of the stars above Lincoln Center, merging cosmic motion with archival material to create a unique artwork that blurs the line between nature, memory, and performance.
        `}
        />
        <Video
          videoSrc={require('./assets/LincolnCenter/wow-5min.webm')}
          orientation={'landscape'}
          caption={`Daily Art Moment`}
          autoplay={'autoplay'}
        />
        <Paragraph
          header={'Atrium Wall'}
          content={`
          This cinematic, wide-screen display is designed for spacious layouts and large, legible type, integrating animation and film content to boost engagement. The canvas supports reusable marketing assets through flexible break-ups, while maintaining standardized QR code placement and functionality.
        `}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/atrium_mockup.png')}
          orientation={'landscape'}
          caption={'Atrium Wall Design'}
        />
        <Paragraph
          content={`
          <b>DAILY LOOP</b><br/>
          The daily loop in the atrium brings equity to the share of voice across constituents, giving slightly more play for atrium related promotions.
          Similar to the blades, it periodically brings in Lincoln Center Umbrella content to maintain cohesion of all the constituents into a single Lincoln Center organization and campus.
        `}
        />
        <Video
          videoSrc={require('./assets/LincolnCenter/atrium_motion_short.mp4')}
          orientation={'landscape'}
          caption={`Daily Loop Sample Clip (2x speed)`}
          autoplay={'autoplay'}
        />
        <Paragraph
          header={'Other Screens'}
          content={`
          This cinematic, wide-screen display is designed for spacious layouts and large, legible type, integrating animation and film content to boost engagement. The canvas supports reusable marketing assets through flexible break-ups, while maintaining standardized QR code placement and functionality.
        `}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/film_entry_mockup.png')}
          orientation={'landscape'}
          caption={'Elinor Bunin Munroe Film Center (Movie Schedule)'}
        />
        <div className={styles.imgstrip_wrapper} style={{ width: '60%' }}>
          <Image
            imgSrc={require('./assets/LincolnCenter/atrium_entry_mockup.png')}
            orientation={'landscape'}
            caption={'David Rubenstein Atrium'}
          />
          <Image
            imgSrc={require('./assets/LincolnCenter/hall_entry_mockup.png')}
            orientation={'landscape'}
            caption={'Alice Tully Hall Entry (Currently On)'}
          />
        </div>

        <Paragraph
          header={'Informational & Marketing Materials'}
          content={`
            The same flexible design system powers both informational materials and marketing content, from print materials to social media. Creating a unified, recognizable visual identity across all communications.
            `}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/brochure.png')}
          orientation={'landscape'}
          caption={'Informational Brochures'}
        />
        <Image
          imgSrc={require('./assets/LincolnCenter/instagram_mockup.png')}
          orientation={'landscape'}
          caption={'Social Media Posts'}
        />

        <FooterNav prev={'TapType'} prevSrc={'/taptype'} next={'Hearts & Bones'} nextSrc={'/hearts-and-bones'} />
      </div>
      <Footer />
    </div>
  );
}
