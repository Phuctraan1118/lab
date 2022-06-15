//import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';
import DishDetail from './components/DisDetailComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        {/* <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/> */}
        <DishDetail dish={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
