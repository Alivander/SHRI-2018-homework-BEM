import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Laik from 'b:Laik';
import Action from 'b:Action';
import Link from 'e:Link';
import 'e:Author';

export default declMod({ content : 'text' }, {
    block : 'Card',
    content({title, titleColor, description, channelName}) {
      return [
        (
          <Fragment>
            <Link title={title} titleColor={titleColor}/>
            <Bem elem='Description'>{description}</Bem>
            <Bem elem='Buttons'>
              <Bem elem='Author' tag='cite'>{channelName}</Bem>
              <Action mix={{ block : 'Card', elem : 'Action' }}/>
              <Laik mix={{ block : 'Card', elem : 'Laik' }}/>
            </Bem>
          </Fragment>
        ),
            this.__base(...arguments)
        ];
    }
});
