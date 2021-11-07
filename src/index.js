import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Shimmer from './components/Shimmer';

ReactDOM.render(
    <StrictMode>
        <Shimmer>
            <App />
        </Shimmer>
        <App />
    </StrictMode>,
    document.getElementById('root'),
);
