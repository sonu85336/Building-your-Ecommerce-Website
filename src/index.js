import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
 import AuthContProvider from './authSotre/authcontProvider'
import './index.css';
import App from './AuthApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthContProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter></AuthContProvider>
);
