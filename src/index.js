import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Page from 'b:Page';

ReactDOM.render(<Page/>, document.getElementById('root'));
registerServiceWorker();
