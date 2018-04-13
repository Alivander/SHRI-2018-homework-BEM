import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'b:VisuallyHidden';
import Image from 'e:Image';

export default decl({
  block: 'Logo',
  tag: 'a',
  content() {
    return (
      <Fragment>
        <Image/>
        <Bem block='VisuallyHidden' tag='h1'>Яндекс Дзен - главная страница</Bem>
      </Fragment>
    );
  }
});
