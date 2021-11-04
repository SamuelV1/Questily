import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato',sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
   <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

