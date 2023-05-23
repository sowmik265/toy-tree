import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';

const AllToys = () => {
    const toys = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const [searchedToy, setSearchedToy] = useState([]);


    const handleSearch = () => {
        fetch(`https://toy-tree-server-two.vercel.app/getToyByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchedToy([...data]);
            });
    };
    
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full p-4">
                    <div className="search-box p-2 text-center mb-6">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            className="p-1 bg-slate-400"
                        />{" "}
                        <button className='hover:bg-rose-600 font-bold text-gray-300 px-4 py-1 bg-white' onClick={handleSearch}>Search</button>
                    </div>

                    <table className="table bg-rose-700 w-full">

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
                                searchedToy.length > 0 ? searchedToy.map(toy => <ToysRow
                                    key={toy._id}
                                    toy={toy}
                                ></ToysRow>) : toys.map(toy => <ToysRow
                                    key={toy._id}
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