import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./ProductList";
import Cart from "./cart/Cart";
import Navbar from "./Navbar";

function App(props) {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/my-cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
