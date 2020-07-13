import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from '../context/GlobalState';
import { v4 } from 'uuid';

const EditGrocery = (props) => {

    const { groceries, editGrocery } = useContext(GlobalContext);
    const [selectedGrocery, setSelectedGrocery] = useState({
        id: '',
        name: '',
        image: '',
        category: '',
        qty: '',
        expiration: ''
    });
    const history = useHistory();
    const currentGroceryId = props.match.params.id;

    useEffect(() => {
        const groceryId = currentGroceryId
        const selectedGrocery = groceries.find(grocery => grocery.id === Number(groceryId))
        setSelectedGrocery(selectedGrocery)
    }, [currentGroceryId, groceries])

    const handleSubmit = () => {


        history.push('/')

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="Name" >Name</label>
                    <input type="text"
                        className="form-control"
                        id="" value={selectedGrocery.name}
                        onChange={(e) => { setSelectedGrocery({ ...selectedGrocery, [e.target.name]: e.target.value }) }}
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="Image" >Image</label>
                    <input type="text"
                        className="form-control"
                        id="" value={selectedGrocery.image}
                        onChange={(e) => { setSelectedGrocery({ ...selectedGrocery, [e.target.image]: e.target.value }) }}
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="ChemicalName" >Quantity</label>
                    <input type="text"
                        className="form-control"
                        id="" value={selectedGrocery.qty}
                        onChange={(e) => { setSelectedGrocery({ ...selectedGrocery, [e.target.qty]: e.target.value }) }}
                        required
                    />

                </div>


                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="ExpirationDate">Expiration</label>
                        <DatePicker selected={selectedGrocery.expiration}
                            // onChange={(date) => { setExpiration(date) }}
                            onChange={(e) => { setSelectedGrocery({ ...selectedGrocery, [e.target.expiration]: e.target.value }) }}
                            required
                        />

                    </div>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="ChemicalName" >Category</label>
                    <select class="custom-select mr-sm-2" id="">
                        <option selected>Choose...</option>
                        <option value="1">Vegetable</option>
                        <option value="2">Grain</option>
                        <option value="3">Milk</option>
                    </select>

                </div> */}

                <div className="form-group">
                    <label htmlFor="ChemicalName" >Category</label>
                    <input type="text"
                        className="form-control"
                        id="" value={selectedGrocery.category}
                        // onChange={(e) => { setCategory(e.target.value) }}
                        onChange={(e) => { setSelectedGrocery({ ...selectedGrocery, [e.target.category]: e.target.value }) }}
                        required
                    />

                </div>

                <div className="form-group center">
                    <button type="submit" className="btn btn-primary">Edit</button>
                    <Link to="/" className="btn btn-info ml-3">Cancel</Link>
                </div>

            </form>
        </div>
    )
}

export default EditGrocery