import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'b:Header';
import Content from 'b:Content';

export default decl({
  block: 'Page',
  content() {
    return (
      <Fragment>
        <Header/>
        <Content/>
      </Fragment>
    );
  }
});
