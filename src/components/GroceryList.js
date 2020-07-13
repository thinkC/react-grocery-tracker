import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import GroceryItem from './GroceryItem';
import { Link } from 'react-router-dom';
import moment from 'moment';

const GroceryList = () => {
    const { groceries, removeGrocery } = useContext(GlobalContext)
    console.log(groceries, removeGrocery)

    const convertDate = (str) => {
        let date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        //console.log([date.getFullYear(), mnth, day].join("-"))
        // let covertedDate = [date.getFullYear(), mnth, day].join("-");
        let covertedDate = [date.getFullYear(), mnth, day].join("-");
        return moment(covertedDate, 'YYYYMMDD').fromNow();
        //return [date.getFullYear(), mnth, day].join("-");
    }


    return groceries.length ? (
        // <div>
        //     <h2>From GroceryList</h2>
        //     <GroceryItem />
        // </div>

        <div className="container">


            <div className="row">

                <div className="col-md-12 col-lg-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th>
                                <th scope="col">Name</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Exp</th>
                                <th scope="col">Category</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* {groceries.map(grocery => {
                                return <GroceryItem grocery={grocery} key={grocery.id} removeGrocery={removeGrocery} />
                            })} */}

                            {groceries.map(grocery => {
                                return (
                                    <tr key={grocery.id}>
                                        <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
                                        <td>{grocery.name}</td>
                                        <td>{grocery.qty}</td>
                                        {/* <td>{grocery.expiration}</td> */}
                                        <td>{convertDate(grocery.expiration)}</td>
                                        <td>{grocery.category}</td>
                                        <td><Link to={`/edit/${grocery.id}`}><span ><i className="fas fa-pen"  ></i></span></Link></td>
                                        <td ><span onClick={() => removeGrocery(grocery.id)} ><i className="fas fa-trash"></i></span></td>
                                    </tr>
                                )
                            })}



                        </tbody>

                    </table>
                    {/* <button onClick={clearGroceries} className="btn btn-success">Clear All</button> */}
                </div>
            </div>





        </div>
    ) : (
            <div className="container">
                No Groceries
            </div>
        )
}

export default GroceryList
