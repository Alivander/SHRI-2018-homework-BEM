import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'b:VisuallyHidden';
import Container from 'e:Container';

export default decl({
  block: 'Content',
  tag: 'main',
  content() {
    return (
      <Fragment>
        <Bem block='VisuallyHidden' tag='h2'>Персональная лента публикаций</Bem>
        <Container/>
      </Fragment>
    );
  }
});
