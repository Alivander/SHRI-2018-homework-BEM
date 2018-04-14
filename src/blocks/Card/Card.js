import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Image from 'b:Image';
import Laik from 'b:Laik';
import Action from 'b:Action';
import Link from 'e:Link';
import 'e:Wrapper';
import 'e:Picture';

export default decl({
  block: 'Card',
  tag: 'article',
  content({title, titleColor, description, image}) {
    return (
      <Fragment>
        <Link title={title} titleColor={titleColor}/>
        <Bem elem='Wrapper'>
          <Image mix={{ block : 'Card', elem : 'Picture' }} title={title} image={image}/>
          <Action/>
          <Laik/>
        </Bem>
      </Fragment>
    );
  }
});
