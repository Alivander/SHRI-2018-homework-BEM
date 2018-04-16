import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Image',
  tag: 'picture',
  content({alt, image}) {
    image = `server-stub/${image}`;
    const src = image.substring(0, image.length - 4);
    const format = image.substring(image.length - 4);

    return (
      <Fragment>
        <source media='(min-width: 512px)' srcSet={`${src}@2x.webp`} type='image/webp'/>
        <source srcSet={`${src}.webp`} type='image/webp'/>
        <source media='(min-width: 704px)' srcSet={`${src}@2x${format}`}/>
        <img src={`${src}${format}`} alt={alt} srcSet={`${src}@2x${format} 2x`}/>
      </Fragment>
    );
  }
});
