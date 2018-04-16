import React from 'react';
import { decl } from 'bem-react-core';

import Logo from 'b:Logo';

export default decl({
  block: 'Header',
  tag: 'header',
  content() {
    return <Logo/>
  }
});
