import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Photo = ({ src, alt }) => {
  const [staticVisible, setStaticVisible] = useState(false);

  return (
    <div
      className="photo"
      onMouseEnter={() => setStaticVisible(true)}
      onMouseLeave={() => setStaticVisible(false)}
    >
      <img src={src} alt={alt} />
      {staticVisible && <div className="static-overlay"></div>}
    </div>
  );
};

const PhotoWheel = () => {
  const [photos, setPhotos] = useState([
    'placeholder1.jpg',
    'placeholder2.jpg',
    'placeholder3.jpg',
    'placeholder4.jpg',
    'placeholder5.jpg',
    'placeholder6.jpg',
    'placeholder7.jpg',
  ]);

  return (
    <div className="photo-wheel">
      {photos.map((photo, index) => (
<Photo key={index} src={photo} alt={Photo ${index + 1}} />
))}
</div>
);
};

const SoundCloudPlayer = ({ url }) => (

  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
      url
    )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
  ></iframe>
);
const App = () => {
return (
<div className="app">
<h1>Tim Fellin</h1>
<PhotoWheel />
<SoundCloudPlayer url="https://soundcloud.com/where_to_begin" />
</div>
);
};

ReactDOM.render(<App />, document.getElementById('app'));
