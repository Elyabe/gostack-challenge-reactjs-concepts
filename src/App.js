import React from "react";

import Header from './components/Header/Header';
import RepositoryList from './components/RepositoryList/RepositoryList';

import "./styles.css";

function App() {
  return ( 
    <>
      <Header />
      <RepositoryList />
    </>
  );
}

export default App;
