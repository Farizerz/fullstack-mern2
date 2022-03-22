import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TambahBarang from './components/TambahBarang';
import ListBarang from './components/ListBarang';

function App() {
  return (
    <Fragment>
        <div className="container">
          <TambahBarang />
          <ListBarang />
        </div>
    </Fragment>

  );
}

export default App;
