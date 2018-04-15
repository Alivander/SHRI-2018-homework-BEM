import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Image from 'b:Image';
import Laik from 'b:Laik';
import Action from 'b:Action';
import Link from 'e:Link';
import 'e:Wrapper';
import 'e:Picture';

export default declMod({ content : 'image' }, {
    block : 'Card',
    content({title, titleColor, image}) {
      return [
        (
          <Fragment>
            <Link title={title} titleColor={titleColor}/>
            <Bem elem='Wrapper'>
              <Image mix={{ block : 'Card', elem : 'Picture' }} alt={title} image={image}/>
              <Action mix={{ block : 'Card', elem : 'Action' }}/>
              <Laik mix={{ block : 'Card', elem : 'Laik' }}/>
            </Bem>
          </Fragment>
        ),
          this.__base(...arguments)
        ];
  }
});
