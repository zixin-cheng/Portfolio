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

export default function HeartsAndBones() {
  useEffect(() => {
    document.title = 'Hearts & Bones — Jane Cheng';
  }, []);
  return (
    <div>
      <Navigationbar />
      <div className={styles.content_wrapper}>
        <IntroStrip tags={'WEB DESIGN'} title={'Hearts & Bones'} />
        <Paragraph
          content={`
          Hearts & Bones is a non-profit dog rescue organization based in Dallas, TX and New York City. As part of the Wix Playground team, I worked on a project to rebuild the website for Hearts & Bones.`}
        />
        <ImageHero imgSrc={require('./assets/HeartsAndBones/H&B HeroImage.jpg')} />
        <InfoStrip
          teams={['Ari Kushmirak']}
          roles={['UI/UX Design', 'User Reasearch', 'Website Build (Wix Editor)']}
          deliverables={['Desktop Website', 'Mobile Website']}
        />
        <Paragraph
          header={'Problem'}
          content={`
          Hearts & Bones was receiving numerous feedback on the poor experience of using their website to navigate information. As a non-profit organization, Hearts & Bones have an extensive amount of information that needs to be stated on their website for different users of this platform.
        `}
        />

        <Paragraph
          header={'Research'}
          content={`To better understand the problems current users are facing with the website, we decided to conduct primary research surveying actual users of the website.
          
          <br><br>

          <b>ORIGINAL WEBSITE</b>
          <br>
          We did some internal research with the staff from Hearts & Bones and devised a list of problems they've realised users were facing with the website. We also analysed the structure and content of the original website to try and figure out how to organize the information in a more effective way.`}
        />

        <div className={styles.imgstrip_wrapper} style={{ width: '80%' }}>
          <Image
            imgSrc={require('./assets/HeartsAndBones/H&B HP(old).jpg')}
            orientation={'portrait'}
            caption={'Original Landing Page'}
          />

          <Image
            imgSrc={require('./assets/HeartsAndBones/H&B ContentPgs (old).png')}
            orientation={'landscape'}
            caption={'Original Website Content'}
          />
        </div>
        <Paragraph
          content={`
          <i>“We commonly get a lot of emails asking about information that's already <ins>clearly listed</ins> on the website.”</i>
          — Hearts & Bones Staff
        `}
        />

        <Paragraph
          content={`
          <b>PRELIMINARY SURVEY</b>
          <br>
          We did some user research at one of Hearts & Bones’ adoption events with users from the 4 main groups: Adopters, Volunteers, Fosters and Donors, to find out more about their basic user behaviours and general goals when visiting Hearts & Bones’ website.
        `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B Survey Graph.png')}
          orientation={'landscape'}
          caption={'Typography Guidelines'}
        />
        <Paragraph
          content={`
          <i>“The information is very <ins>scattered</ins>. I have to really try and find the things I'm looking for sometimes.”</i>
— Potential Adoptor
        `}
        />
        <Paragraph
          content={`
          <i>“It took me a while to figure out the process of adoption and even after that I'm <ins>not so sure</ins> if what I got was correct.”</i>
— Potential Adoptor
        `}
        />
        <Paragraph
          content={`
          <b>INSIGHTS</b>
          <br>
          From our survey and short interviews with the staff and users of the website, we summarized the most common needs and goals of them.
          
          <ol>
            <li>
              <p>Users want the information to be more organized and structured.</p>
            </li>
            <li>
              <p>Users want better user flow that clearly indicates the process.
              </p>
            </li>
            <li>
              <p>Users want to focus on the information they need to know and worry about additional information later.</p>
            </li>
            <li>
              <p>Users want to be able to access the website on a mobile as fluidly as they would on a desktop.</p>
            </li>
          </ol>
        `}
        />

        <Paragraph
          header={'Ideation'}
          content={`
          <b>INFORMATION ARCHITECTURE</b>
          <br>
          We’ve rearranged the website structure so the menu show where different user groups would navigate to. To create a more fluid user flow, pages in the same category are compiled onto a single page so users don’t have to keep referring back to the menu and being redirected to a new page.
        `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B IA.png')}
          orientation={'landscape'}
          caption={'Information Architecture'}
        />
        <Paragraph
          content={`
          <b>LO-FI WIREFRAME</b>
          <br>
          We sketched out multiple lo-fi wireframes of the pages that have most dynamic contents to test out how to restructure the informations and flow so users won't constantly feel confused and overwhelmed.  We've decided create a main page for each user group that introduces the general flow, so users get a better sense of the overall scope of each process.
          <br><br>
          For steps that require more explanation, we complied all of the additional information in each flow onto one continuous page. This way users who wish to read more into the details could find all the information they need on one single page without having to navigate back and forth to find them.
          `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B LofiWirefram.png')}
          orientation={'landscape'}
          caption={'Lo-fi Wireframe'}
        />
        <Paragraph
          content={`
          <b>MID-FI WIREFRAME PROTOTYPE</b>
          <br>
          After settling down on the overall layout of the website, we went on to create a mid-fi wireframe of all the pages as well as a protype.
          <br><br>
          The use of spaces and large images helps to break up long pieces of information and make the overall UI of the website more reader-friendly. Information is easier to view and process back and forth. CTA buttons that lead to the applications page are also included at the top and bottom of each page for a clearer purpose.
          `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B MidfiWireframe.png')}
          orientation={'landscape'}
          caption={'Prototype'}
        />

        <Paragraph
          header={'Design'}
          content={`
          The final layout is kept simple as the photos are meant to be changed regularly featuring new adoptable dogs all the time, so choosing a layout that’s interchangeable with any photo composition was crucial.
        `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B DesktopCompile.jpg')}
          orientation={'landscape'}
          caption={'Desktop Version Designs'}
        />
        <Paragraph
          content={`
          <b>MOBILE VERSION</b>
          <br>
          We kept in mind the mobile users take up a huge percentage of Hearts & Bones’ demographic, so we implicated the desktop design into a mobile version as well.
          `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B Mobile.png')}
          orientation={'landscape'}
          caption={'Mobile Version Design'}
        />

        <Paragraph
          content={`
          <b>FINAL WEBSITE</b>
          <br>
          As a part of the Wix Design Academy, we built the final website with the Wix Editor.
          <br><br>
          <a href="https://janecheng1026.wixsite.com/heartsandbones" target="_blank" rel="noopener noreferrer">View the final live website here </a>
          <br>
          Note: The website is updated by Hearts & Bones staff after completion of this project. Therefore, current website might vary from the designs shown in this presentation
          `}
        />
        <Image
          imgSrc={require('./assets/HeartsAndBones/H&B HeroImage.jpg')}
          orientation={'landscape'}
          caption={'Final Design'}
        />

        <FooterNav
          prev={'World Cheese Award'}
          prevSrc={'/world-cheese-award'}
          next={'Lash In Bloom'}
          nextSrc={'/lash-in-bloom'}
        />
      </div>
      <Footer />
    </div>
  );
}
