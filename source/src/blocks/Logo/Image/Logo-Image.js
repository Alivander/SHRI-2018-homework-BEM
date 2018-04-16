import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import logoPng from './zen_logo@2x.png';
import logoPngWEBP from './zen_logo@2x.webp';

export default decl({
  block: 'Logo',
  elem: 'Image',
  tag: 'picture',
  content() {
    return (
      <Fragment>
        <source srcSet={logoPngWEBP} type="image/webp"/>
        <Bem elem="Image" tag="img" src={logoPng} alt="Яндекс Дзен"/>
      </Fragment>
    );
  }
});
