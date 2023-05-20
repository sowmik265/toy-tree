import React from 'react';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { SiMaterialdesignicons } from 'react-icons/si';
import { BsShopWindow } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';

const HomeCard = () => {
    return (

        <div className='mt-10'>
            <h1 className='text-center font-extrabold  text-5xl text-cyan-500 drop-shadow-2xl mt-10'>We Offers. .</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mx-20 mx-5 md:px-28  '>
                <div className='bg-cyan-700 h-48 border flex-flex-col items-start justify-center p-4'>
                    <div className='p-4 bg-slate-200 w-1/3 flex justify-center'><BsFillCarFrontFill></BsFillCarFrontFill></div>
                    <p className='font-medium mt-4 font-sans text-gray-200'>Biggest Collections</p>
                    <p className='font-extralight text-xs mt-1 font-sans text-gray-300'>5000+ Cars Available</p>
                </div>
                <div className='bg-cyan-700 h-48 border flex-flex-col items-start justify-center p-4'>
                    <div className='p-4 bg-slate-200 w-1/3 flex justify-center'><SiMaterialdesignicons></SiMaterialdesignicons></div>
                    <p className='font-medium mt-4 font-sans text-gray-200'>Exclusive Design</p>
                    <p className='font-extralight text-xs mt-1 font-sans text-gray-300'>300+ Desgin Available</p>
                </div>
                <div className='bg-cyan-700 h-48 border flex-flex-col items-start justify-center p-4'>
                    <div className='p-4 bg-slate-200 w-1/3 flex justify-center'><BsShopWindow></BsShopWindow></div>
                    <p className='font-medium mt-4 font-sans text-gray-200'>Sales Point</p>
                    <p className='font-extralight text-xs mt-1 font-sans text-gray-300'>25 Outlets</p>
                </div>
                <div className='bg-cyan-700 h-48 border flex-flex-col items-start justify-center p-4'>
                    <div className='p-4 bg-slate-200 w-1/3 flex justify-center'><GrCart></GrCart></div>
                    <p className='font-medium mt-4 font-sans text-gray-200'>Fastest Online Delivery</p>
                    <p className='font-extralight text-xs mt-1 font-sans text-gray-300'>Covers all over the country</p>
                </div>
            </div>

        </div>

    );
};

export default HomeCard;