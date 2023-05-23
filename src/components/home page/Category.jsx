import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () => {
    const [sportsCar, setSportsCar] = useState([]);
    const [classicCar, setClassicCar] = useState([]);
    const [suvCar, setSuvCar] = useState([]);

    useEffect(() => {
        fetch('https://toy-tree-server-two.vercel.app/sportscar')
            .then(res => res.json())
            .then(data => setSportsCar(data));
    }, [])

    useEffect(() => {
        fetch('https://toy-tree-server-two.vercel.app/classiccar')
            .then(res => res.json())
            .then(data => setClassicCar(data));
    }, [])

    useEffect(() => {
        fetch('https://toy-tree-server-two.vercel.app/suvcar')
            .then(res => res.json())
            .then(data => setSuvCar(data));
    }, [])




    return (
        <div className='mx-auto'>
            <div className='mt-10 text-center '>
                <h1 className=' font-extrabold  text-5xl text-cyan-500 drop-shadow-2xl'> Our Toy Category</h1>
            </div>

            <Tabs className='mt-10
            '>
                <TabList className='flex justify-center gap-5 bg-cyan-700 font-bold text-gray-300'>
                    <Tab>Sports cars</Tab>
                    <Tab>Off-Road Vehicles</Tab>
                    <Tab>Classic Cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:flex justify-center gap-4 mt-4 mx-auto'>
                        {sportsCar.map(sports => (
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure className='h-46'><img className='' src={sports.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{sports.toy_name}</h2>
                                    <p>Seller : {sports.seller_name}</p>
                                    <p className='flex items-center'>Price : {sports.price} <FaDollarSign /></p>
                                    <p>Available Quantity : {sports.quantity}</p>
                                    <p className='flex items-center'>Ratings : {sports.rating} <BsFillBookmarkStarFill /></p>
                                    <p className='border border-cyan-700 p-4'>About : {sports.detail_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"><Link to='/alltoys'>Buy Now</Link></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex justify-center gap-4 mt-4 sm:w-100'>
                        {suvCar.map(suv => (
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure className='h-46'><img className='' src={suv.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{suv.toy_name}</h2>
                                    <p>Seller : {suv.seller_name}</p>
                                    <p className='flex items-center'>Price : {suv.price} <FaDollarSign /></p>
                                    <p>Available Quantity : {suv.quantity}</p>
                                    <p className='flex items-center'>Ratings : {suv.rating} <BsFillBookmarkStarFill /></p>
                                    <p className='border border-cyan-700 p-4'>About : {suv.detail_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"><Link to='/alltoys'>Buy Now</Link></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='md:flex justify-center gap-4 mt-4'>
                        {classicCar.map(classic => (
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure className='h-46'><img className='' src={classic.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{classic.toy_name}</h2>
                                    <p>Seller : {classic.seller_name}</p>
                                    <p className='flex items-center'>Price : {classic.price} <FaDollarSign /></p>
                                    <p>Available Quantity : {classic.quantity}</p>
                                    <p className='flex items-center'>Ratings : {classic.rating} <BsFillBookmarkStarFill /></p>
                                    <p className='border border-cyan-700 p-4'>About : {classic.detail_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"><Link to='/alltoys'>Buy Now</Link></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>








        </div >
    );
};

export default Category;