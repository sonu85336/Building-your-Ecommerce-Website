import {BrowserRouter}  from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
 
import './index.css';
import App from './App';
// import bootstarp 
import 'react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter><App /></BrowserRouter>);
