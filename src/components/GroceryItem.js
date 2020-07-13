// import React from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// // function GroceryItem(props) {
// //     console.log(props)
// //     const { grocery } = props;

// //     if (!grocery) {
// //         return null
// //     }

// //     const convertDate = (str) => {
// //         let date = new Date(str),
// //             mnth = ("0" + (date.getMonth() + 1)).slice(-2),
// //             day = ("0" + date.getDate()).slice(-2);
// //         //console.log([date.getFullYear(), mnth, day].join("-"))
// //         // let covertedDate = [date.getFullYear(), mnth, day].join("-");
// //         let covertedDate = [date.getFullYear(), mnth, day].join("-");
// //         return moment(covertedDate, 'YYYYMMDD').fromNow();
// //         //return [date.getFullYear(), mnth, day].join("-");
// //     }
// //     return (
// //         // <div>
// //         //     from GroceryItem
// //         // </div>

// //         <tr>
// //             <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
// //             <td>{grocery.name}</td>
// //             <td>{grocery.qty}</td>
// //             {/* <td>{grocery.expiration}</td> */}
// //             <td>{convertDate(grocery.expiration)}</td>
// //             <td>{grocery.category}</td>
// //             <td><Link to={`/edit/${grocery.id}`}><span ><i className="fas fa-pen"  ></i></span></Link></td>
// //             {/* <td ><span onClick={() => removeGrocery(grocery.id)} ><i className="fas fa-trash"></i></span></td> */}
// //         </tr>


// //     )
// // }


// function GroceryItem(props) {
//     console.log(props)
//     const { grocery } = props;

//     if (!grocery) {
//         return null
//     }

//     const convertDate = (str) => {
//         let date = new Date(str),
//             mnth = ("0" + (date.getMonth() + 1)).slice(-2),
//             day = ("0" + date.getDate()).slice(-2);
//         //console.log([date.getFullYear(), mnth, day].join("-"))
//         // let covertedDate = [date.getFullYear(), mnth, day].join("-");
//         let covertedDate = [date.getFullYear(), mnth, day].join("-");
//         return moment(covertedDate, 'YYYYMMDD').fromNow();
//         //return [date.getFullYear(), mnth, day].join("-");
//     }
//     return (
//         // <div>
//         //     from GroceryItem
//         // </div>

//         <tr>
//             <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
//             <td>{grocery.name}</td>
//             <td>{grocery.qty}</td>
//             {/* <td>{grocery.expiration}</td> */}
//             <td>{convertDate(grocery.expiration)}</td>
//             <td>{grocery.category}</td>
//             <td><Link to={`/edit/${grocery.id}`}><span ><i className="fas fa-pen"  ></i></span></Link></td>
//             {/* <td ><span onClick={() => removeGrocery(grocery.id)} ><i className="fas fa-trash"></i></span></td> */}
//         </tr>


//     )
// }

// export default GroceryItem
