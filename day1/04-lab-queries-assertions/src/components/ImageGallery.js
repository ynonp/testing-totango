import { useState } from 'react';

export default function ListWithFilters(props) {
  const { images } = props;
  const [ selectedImage, setSelectedImage ] = useState(0);
  
  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={images[selectedImage]} />
      </div>
      <div className="thumbnails">
        {images.map((img, index) => (
          <img src={img} key={index}  onClick={() => setSelectedImage(index) }/>
        ))}
      </div>
    </div>
  );
}
