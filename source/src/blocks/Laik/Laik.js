import React from 'react';
import { decl, Bem } from 'bem-react-core';

import 'b:VisuallyHidden';

export default decl({
  block: 'Laik',
  tag: 'button',
  attrs({ type }) {
    return {
      type: 'button'
    };
  },
  content() {
    return <Bem block='VisuallyHidden' tag='span'>Мне нравится!</Bem>;
  }
});
