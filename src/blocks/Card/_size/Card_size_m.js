import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Image from 'b:Image';
import Laik from 'b:Laik';
import Action from 'b:Action';
import Link from 'e:Link';
import 'e:Wrapper';
import 'e:Picture';

export default declMod({ size : 'm' }, {
    block : 'Card',
    content({title, titleColor, description, image}) {
        return [
          (
            <Fragment>
              <Link title={title} titleColor={titleColor}/>
              <Image mix={{ block : 'Card', elem : 'Picture' }} alt={title} image={image}/>
              <Bem elem='Wrapper'>
                <Bem elem='Description'>{description}</Bem>
                <Action mix={{ block : 'Card', elem : 'Action' }}/>
                <Laik mix={{ block : 'Card', elem : 'Laik' }}/>
              </Bem>
            </Fragment>
          ),
            this.__base(...arguments)
          ];
    }
});
