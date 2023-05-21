import React from 'react';
import { Link } from 'react-router-dom';

const MyToyDetails = ({myToy , handleDelete}) => {
    const { _id, seller, name, category, price, quantity } = myToy;
    return (
        <tr>
        <td> {seller} </td>
        <td> {name} </td>
        <td> {category} </td>
        <td> {price} </td>
        <td> {quantity} </td>
        <td><button className='bg-green-600 px-4 py-1 rounded font-bold text-gray-300'>Update</button></td>
        <td><button onClick={() => handleDelete(_id)} className='bg-red-600 px-4 py-1 rounded font-bold text-gray-300'>Delete</button></td>
    </tr>
    );
};

export default MyToyDetails;