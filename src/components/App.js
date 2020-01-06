import React from 'react';

import MainHeaderComponent from "./header/MainHeaderComponent";
import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";
import SignInComponent from "./login/SignInComponent";

import '../styles/styles.css'




const App = () => (
  <div>
    {/*<MainHeaderComponent />
    <MainNewsListComponent />
    <HomePageComponent />*/}
    <SignInComponent />
  </div>
);

export default App;
