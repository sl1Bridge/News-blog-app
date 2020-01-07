import React from 'react';

import MainHeaderComponent from "./header/MainHeaderComponent";
import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";
import SignInComponent from "./login/SignInComponent";
import MainProfileComponent from "./profile/MainProfileComponent";

import '../styles/styles.css'

const App = () => (
  <div>
    <MainHeaderComponent />
    <MainNewsListComponent />
    <HomePageComponent />
    <SignInComponent />
    <MainProfileComponent />
  </div>
);

export default App;
