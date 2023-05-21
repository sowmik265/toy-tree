import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { toyId } = useParams()
    const toyDetailsData = useLoaderData();

    const [toy, setToy] = useState({});
    useEffect(() => {
        const toyData = toyDetailsData.find(sToy => sToy._id == toyId);
        setToy(toyData)

    }, [])

    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;
    return (

        <div className='mt-10 p-2 md:p-10'>
            <div className="hero min-h-screen bg-cyan-700">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-gray-300">{name}</h1>
                        <p className='font-bold text-gray-300'>Sub-category : <span className='text-black'>{category}</span></p>
                        <p className='font-bold text-gray-300'>Seller : <span className='text-black'>{seller}</span></p>
                        <p className='font-bold text-gray-300'>Seller Email : <span className='text-black'>{email}</span></p>
                        <p className='font-bold text-gray-300'>Price : <span className='text-black'>{price} $</span></p>
                        <p className='font-bold text-gray-300'>Ratings : <span className='text-black'>{rating}</span></p>
                        <p className='font-bold text-gray-300'>Available Quantity : <span className='text-black'>{quantity} pcs</span></p>
                        <p className='font-bold text-gray-300'>Details : <span className='text-black'>{details}</span></p>
                        <button className="btn btn-primary mt-10">Buy Now!</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ToyDetails;