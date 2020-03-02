
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {

        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Shopping cart</Link>
                    </div>

                    {/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/my-cart"><i className="glyphicon glyphicon-shopping-cart"></i> My Cart</Link></li>
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
        )
    }
}

export default Navbar;
