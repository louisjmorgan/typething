/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const prefix = 'v1664791356/';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzzhteqkx',
  },
});

const renderPhoto = ({
  layout, layoutOptions, imageProps: {
    alt, style, location, ...restImageProps
  },
}) => {
  const [isHover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(true);
  };
  const unToggleHover = () => {
    setHover(false);
  };

  return (
    <button
      type="button"
      onClick={() => layoutOptions.onClick(layout.index)}
      // onClick={restImageProps.onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={unToggleHover}
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        alt={alt}
        style={{
          ...style,
          width: '100%',
          padding: 0,
        }}
        {...restImageProps}
      />
      {isHover && (
      <div
        style={{

          backgroundColor: 'rgba(0,0,0,0.5)',
          height: `${layout.height - layoutOptions.padding}px`,
          width: '100%',
          position: 'absolute',
          zIndex: 3,
          top: 0,
          left: 0,
          right: 0,
          marginTop: layoutOptions.padding * 2,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'end',
          padding: '3rem',
        }}
      >
        {alt}
      </div>
      )}
    </button>
  );
};

function Gallery() {
  const [photos, setPhotos] = useState();
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    fetch('https://res.cloudinary.com/dzzhteqkx/image/list/gallery.json')
      .then((res) => res.json())
      .then((res) => setPhotos(() => res.resources.map((resource) => ({
        width: resource.width,
        height: resource.height,
        src: cld.image(prefix + resource.public_id).toURL(),
        alt: resource.context.custom.location,
      }))));
  });

  return photos && (
    <Stack
      p={[5, 10, '5rem', '10rem']}
      pt={['10rem', '10rem', '10rem', '10rem']}
      minHeight="500px"

    >
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        columns={2}
        renderPhoto={renderPhoto}
        onClick={setIndex}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Slideshow, Thumbnails, Zoom]}
      />
    </Stack>
  );
}

export default Gallery;
