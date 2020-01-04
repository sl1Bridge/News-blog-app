import React from 'react';

import '../styles/styles.css'
import MainHeaderComponent from "./header/MainHeaderComponent";
import MainNewsListComponent from "./news/MainNewsListComponent";


const App = () => (
  <div>
    <MainHeaderComponent />
    <MainNewsListComponent />
  </div>
);

export default App;
