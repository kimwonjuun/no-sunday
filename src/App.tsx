import React from 'react';
import GlobalStyle from './common/globalStyles';
import Router from './shared/Router';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
