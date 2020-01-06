import React from 'react';

import '../styles/styles.css'
import MainHeaderComponent from "./header/MainHeaderComponent";
import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";


const App = () => (
  <div>
    {/*<MainHeaderComponent />
    <MainNewsListComponent />*/}
    <HomePageComponent />
  </div>
);

export default App;
