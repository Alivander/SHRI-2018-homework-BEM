import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Title',
  tag: 'h3',
  content({text, color}) {
    return (
      <font color={color}>
        {text}
      </font>
    );
  }
});
