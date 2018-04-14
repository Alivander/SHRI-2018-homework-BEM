import React from 'react';
import { decl } from 'bem-react-core';

import Card from 'b:Card';

import dataStub from '../../../server-stub/data';

export default decl({
  block: 'Content',
  elem: 'Container',
  tag: 'main',
  state: {
    data: dataStub
  },
  content() {
    const data = this.state.data;
    return data.map((item) => <Card {...item}/>);
  }
});
