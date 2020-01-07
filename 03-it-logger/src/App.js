import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  // Initializes Materialize JS
  useEffect(() => {
    M.AutoInit();
  });

  return <div>My App</div>;
};

export default App;
