import React from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';

export default decl({
  block: 'Card',
  elem: 'Link',
  tag: 'a',
  attrs({href}) {
    return {
      href: '#'
    }
  },
  content({title, titleColor}) {
    return <Title text={title} color={titleColor}/>;
  }
});
