import React from 'react';
import { decl } from 'bem-react-core';

import Card from 'b:Card';

import dataStub from '../../../server-stub/data';

export default decl({
  block: 'Content',
  elem: 'Container',
  tag: 'section',
  state: {
    data: dataStub
  },
  content() {
    const data = this.state.data;
    return data.map((item) => {
      if (item.size === 's') {
        if (item.image) {
          item.content = 'image';
        } else {
          item.content = 'text';
        }
      }
      return <Card {...item}/>;
    });
  }
});
