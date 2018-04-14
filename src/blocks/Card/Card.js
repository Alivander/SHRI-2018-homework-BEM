import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Link from 'e:Link';

export default decl({
  block: 'Card',
  tag: 'article',
  content({title}) {
    return (
      <Fragment>
        <Link title={title}/>
      </Fragment>
    );
  }
});
