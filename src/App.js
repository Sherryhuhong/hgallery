import React from 'react';
import RouterMap from './router';
import PhotoProvider from './context/PhotoContext';

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
