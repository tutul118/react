import React from 'react';
import './App.css';
import Count from './components/Count';
import Article from './components/Article'
import Table from './components/Table'
import In from './components/In'
import Propping from './components/Propping';
import Navigate from './components/Navigate';


function App() {
  return (
    <div className="App">
       <Count/>
       <Article/>
       <Table/>
       <In/>
       <Propping/>
       <Navigate/>
    </div>
  );
}

export default App;
