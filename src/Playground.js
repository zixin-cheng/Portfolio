import { useEffect, useState } from 'react';

import Navigationbar from './components/NavigationBar';
import Footer from './components/Footer';

import styles from './ProjectPages/ProjectPage.module.css';

export default function Playground() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    document.title = 'Playground — Jane Cheng';

    fetch('/.netlify/functions/cloudinary-folder')
      .then((res) => res.json())
      .then((data) => {
        console.log('RAW API RESPONSE:', data);

        setVideos(data.resources || []);
      });
  }, []);

  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <main
          style={{
            maxWidth: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
            margin: '0 auto',
            columns: '320px',
            columnGap: 32,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.publicId}
              style={{
                breakInside: 'avoid',
                marginBottom: 32,
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 8,
                }}
              >
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
