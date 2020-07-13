import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GroceryList from './components/GroceryList';
import AddGrocery from './components/AddGrocery';
import EditGrocery from './components/EditGrocery';
import { GroceryProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GroceryProvider>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>

            <Route exact path="/" component={GroceryList} />
            <Route path="/add" component={AddGrocery} />
            <Route path="/edit/:id" component={EditGrocery} />
          </Switch>
        </div>
      </BrowserRouter>
    </GroceryProvider>
  );
}

export default App;
