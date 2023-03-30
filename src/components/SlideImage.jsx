import { useEffect, useState } from 'react';
import '../styles/SlideImgStyle.css'


function SlideImage() {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = document.querySelector('.image');
    const text = document.querySelector('.text');

    if (imageLoaded) {
      setTimeout(() => {
        image.style.right = '70%';
        text.style.opacity = '1'; 
      }, 2000);
    }
  }, [imageLoaded]);

   


  return ( 
    <div className="cont">
      <img src="/assets/img/logo.svg" alt="your-image" className="image" onLoad={() => setImageLoaded(true)} />
      <div className="text">
        <h2>Votre titre ici</h2>
        <p>Votre texte ici</p>
      </div>
    </div>
   );
}

export default SlideImage;