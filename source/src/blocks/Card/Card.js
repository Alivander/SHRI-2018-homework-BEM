import { decl } from 'bem-react-core';

import 'm:content=image|text';
import 'm:size=l|m|s';

export default decl({
  block : 'Card',
  tag: 'article',
  mods({ size, content }) {
    if (content) {
      return { size, content };
    }
    return { size };
  }
});
