import React from 'react';
import PhotoProvider from './context/PhotoContext';
import RouterMap from './router';

function App() {
  return (
    <div className="App">
      <PhotoProvider>
        <RouterMap />
      </PhotoProvider>
    </div>
  );
}

export default App;
