import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import logoPng from './zen_logo@2x.png';
import logoPngDesc from './zen_logo@3x.png';
import logoPngWEBP from './zen_logo@2x.webp';
import logoPngDescWEBP from './zen_logo@3x.webp';

export default decl({
  block: 'Logo',
  elem: 'Image',
  tag: 'picture',
  content() {
    return (
      <Fragment>
        <source media="(min-width: 1200px)" srcSet={logoPngDescWEBP} type="image/webp"/>
        <source srcSet={logoPngWEBP} type="image/webp"/>
        <source media="(min-width: 1200px)" srcSet={logoPngDesc}/>
        <Bem elem="Image" tag="img" src={logoPng} alt="Яндекс Дзен"/>
      </Fragment>
    );
  }
});
