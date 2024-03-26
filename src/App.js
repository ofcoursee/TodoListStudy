import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #CCEAD9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;