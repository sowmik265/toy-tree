import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full p-4">
                    <table className="table bg-rose-700 w-full">  
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <ToysRow
                                    key={toys._id}
                                    toy={toy}
                                ></ToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;