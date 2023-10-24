import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootReactElement = 
  <BrowserRouter>
    <App />;
  </BrowserRouter>

const rootReactContainer = createRoot(document.getElementById('root'));

rootReactContainer.render(rootReactElement);
