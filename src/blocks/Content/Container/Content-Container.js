import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'b:VisuallyHidden';

export default decl({
  block: 'Content',
  elem: 'Container',
  tag: 'main',
  content() {
    return (
      <Fragment>
        //<Bem block='VisuallyHidden' tag='h2'>Персональная лента публикаций</Bem>
      </Fragment>
    );
  }
});
