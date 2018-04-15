import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Image from 'b:Image';
import Laik from 'b:Laik';
import Action from 'b:Action';
import Link from 'e:Link';
import 'e:Wrapper';
import 'e:Picture';

export default declMod({ size : 'l' }, {
    block : 'Card',
    content({title, titleColor, description, image}) {
        return [
          (
            <Fragment>
              <Image mix={{ block : 'Card', elem : 'Picture' }} alt={title} image={image}/>
              <Bem elem='Wrapper'>
                <Link title={title} titleColor={titleColor}/>
                <Bem elem='Description'>{description}</Bem>
                <Bem elem='Buttons'>
                  <Action mix={{ block : 'Card', elem : 'Action' }}/>
                  <Laik mix={{ block : 'Card', elem : 'Laik' }}/>
                </Bem>
              </Bem>
            </Fragment>
          ),
            this.__base(...arguments)
          ];
    }
});
