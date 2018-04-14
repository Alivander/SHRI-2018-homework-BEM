import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Image',
  tag: 'picture',
  content({title, image}) {
    image = `server-stub/${image}`;
    const src = image.substring(0, image.length - 4);
    const format = image.substring(image.length - 4);

    return (
      <Fragment>
        <source media='(min-width: 1200px)' srcset={`${src}@3x.webp`} type='image/webp'/>
        <source media='(min-width: 512px)' srcset={`${src}@2x.webp`} type='image/webp'/>
        <source srcset={`${src}.webp`} type='image/webp'/>
        <source media='(min-width: 1056px)' srcset={`${src}@3x${format}`}/>
        <source media='(min-width: 704px)' srcset={`${src}@2x${format}`}/>
        <img src={`${src}${format}`} alt={title} srcset={`${src}@2x${format} 2x`}/>
      </Fragment>
    );
  }
});
