import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {

    const { groceries } = useContext(GlobalContext);
    let location = useLocation();
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-8 col-lg-8" id="banner">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
                </div>
                <div className="col-md-4 col-lg-4">
                    <h1 className="mt-3">Groceries Inventory | Tracker</h1>
                    <h5><i>Total number of grocery items - {groceries.length}</i></h5>
                    <button className="btn btn-lg btn-success mt-5">
                        {location.pathname === '/' ? <Link to="/add">Add Grocery</Link> : <Link to="/">Home</Link>}
                    </button>

                </div>
            </div>

        </div>
    )
}


export default Navbar;