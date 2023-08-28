import React from 'react';
import BackwardCounter from '../pages/BackwardCounter';
import ForwardCounter from '../pages/ForwardCounter';
import StaticCounter from '../pages/StaticCounter';

function App() {
  return (
    <>
      <ForwardCounter />
      <StaticCounter />
      <BackwardCounter />
    </>
  );
}

export default App;