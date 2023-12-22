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

export default function LashInBloom() {
  useEffect(() => {
    document.title = 'Lash In Bloom — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'BRANDING & WEB DESIGN'} title={'Lash In Bloom'} />
        <Paragraph
          content={`
          Lash In Bloom is a branding project for a Singaporean salon, Browhaus, on launching their new lash extension service.
          
          <br><br>

          <a href="www.browhaus.com/lashinbloom/" target="_blank" rel="noopener noreferrer">www.browhaus.com/lashinbloom/</a>
          `}
        />
        <ImageHero imgSrc={require('./assets/LashInBloom/lashinbloom_hero.jpg')} />
        <InfoStrip
          roles={['Lead Designer']}
          teams={['Chloe Low', 'Mei Yin Ying']}
          deliverables={['Key Visual', 'Posters', 'Pamphlets', 'Social Media Assets', 'Website']}
        />
        <Paragraph
          header={'Reasearch'}
          content={`
          Browhaus is a salon that specialized in brow and lash grooming services with stores in Singapore, London, New York, Shanghai, and more. The visual style of the brand often uses bright colors with clean illustrative playful design in order to appeal to younger audiences.
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/Lash_BrowhauseResearch.png')}
          orientation={'landscape'}
          caption={'Online presence, Browhaus'}
        />
        <Paragraph
          content={`
          The target customers of this service and the brand are young customers around the age of 18 to 35. Therefore, the visuals for this service had to be fresh and eyecatchy.
          `}
        />
        <div className={styles.imgstrip_wrapper}>
          <Image imgSrc={require('./assets/LashInBloom/research1.jpg')} orientation={'square'} caption={`Research`} />
          <Image imgSrc={require('./assets/LashInBloom/research2.jpg')} orientation={'square'} caption={`Brainstorm`} />
        </div>

        <Paragraph
          header={'Experimentation'}
          content={`
          I started out experimenting with different styles that fit the overall brand image of Browhaus. Focusing on floral and illustrative styles that are bright and attractive. The team liked the idea of using dandelions to represent the idea on "Bloom" and the green coloration that fits well with the brand image.
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/Lash_V1.png')}
          orientation={'landscape'}
          caption={'Samples from first-round designs'}
        />
        <Paragraph
          content={`
          Working from the first round of designs, we decided to combine the idea of dandelion with a more illustrative style that captures the strands of the dandelions representing luscious lashes.

          <br><br>

          We realized the visual then became overcrowded with all the lines and stokes from the illustrative typeface as well as the dandelion, so we discarded the dandelions and incorporated strokes on top of the typeface to represent the lashes.
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/Lash_V2.png')}
          orientation={'landscape'}
          caption={'Samples from second-round designs'}
        />

        <Paragraph
          header={'Final Key Visual'}
          content={`
          To match the overall identity of Browhaus's brand, the final visual utilized shades of green and tropical leaves to represent the natural blooming effect. A hand-written style typeface was also chosen to mimic the texture of natural lashes. By reducing the number of leaves and additional elements, we managed to change the focus on the text while keeping the essence of nature.
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/Lash in Bloom_TN.png')}
          orientation={'landscape'}
          caption={'Final Key Visual'}
        />

        <Paragraph
          header={'In-Store Assets'}
          content={`
          To match the overall identity of Browhaus's brand, the final visual utilized shades of green and tropical leaves to represent the natural blooming effect. A hand-written style typeface was also chosen to mimic the texture of natural lashes. By reducing the number of leaves and additional elements, we managed to change the focus on the text while keeping the essence of nature.
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/lashinbloom_01.jpg')}
          orientation={'landscape'}
          caption={'Service Menu'}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/lashinbloom_02.jpg')}
          orientation={'landscape'}
          caption={'Service Menu'}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/lashinbloom_03.jpg')}
          orientation={'landscape'}
          caption={'Store View — Poster'}
        />

        <Paragraph
          header={'Digital Assets'}
          content={`
          <b>SOCIAL MEDIA ASSETS</b>
          To match the overall identity of Browhaus's brand, the final visual utilized shades of green and tropical leaves to represent the natural blooming effect. A hand-written style typeface was also chosen to mimic the texture of natural lashes. By reducing the number of leaves and additional elements, we managed to change the focus on the text while keeping the essence of nature.
          `}
        />
        <div className={styles.imgstrip_wrapper}>
          <Video
            videoSrc={require('./assets/LashInBloom/ins_post2.mp4')}
            orientation={'square'}
            caption={`Instagram Post`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
          <Video
            videoSrc={require('./assets/LashInBloom/ins_post3.mp4')}
            orientation={'square'}
            caption={`Ipad Instagram Post`}
            autoplay={'autoplay'}
            muted={'muted'}
            loop={'loop'}
          />
        </div>

        <Paragraph
          content={`
          <b>WEBSITE</b>
          <br>
          Visit the Lash in Bloom website to find out more designs in use.
          <br>
          <a href="www.browhaus.com/lashinbloom/" target="_blank" rel="noopener noreferrer">www.browhaus.com/lashinbloom/</a>
          `}
        />
        <Image
          imgSrc={require('./assets/LashInBloom/Lash_Website.png')}
          orientation={'landscape'}
          caption={'Landing Page'}
        />

        <FooterNav prev={'Hearts & Bones'} prevSrc={'/hearts-and-bones'} next={'WPP House'} nextSrc={'/wpp-house'} />
      </div>
      <Footer />
    </div>
  );
}
