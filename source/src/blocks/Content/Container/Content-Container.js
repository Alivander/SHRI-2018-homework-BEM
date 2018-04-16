import React from 'react';
import { decl } from 'bem-react-core';

import Card from 'b:Card';

export default decl({
  block: 'Content',
  elem: 'Container',
  tag: 'section',
  state: {
    data: []
  },
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(json => {
        const data = json.articles;
        this.setState({ data });
      })
      .catch(error => console.log(error));
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
