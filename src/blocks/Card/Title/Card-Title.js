import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Title',
  tag: 'h3',
  content({text}) {
    return text;
  }
});
