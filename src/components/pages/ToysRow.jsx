import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ toy }) => {
    const { _id, seller, name, category, price, quantity } = toy;
    return (
        <tr>
            <td> {seller} </td>
            <td> {name} </td>
            <td> {category} </td>
            <td> {price} </td>
            <td> {quantity} </td>
            <td><Link to={`/toydetails/${_id}`}><button>View Details</button></Link></td>
        </tr>
    );
};

export default ToysRow;