import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import MyToyDetails from './MyToyDetails';
import Swal from 'sweetalert2';

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/toy?email=${user?.email}`;
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const handleDelete = id => {
        const proceed = Swal.fire(
            'DELETION ALERT?',
            'Are you sure you want to delete?',
            'question'
        )
        if (proceed) {
            fetch(`http://localhost:5000/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'You Have Succesfully Deleted the Toy!',
                            icon: 'success',
                            confirmButtonText: 'Thank you!'
                        })
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2 className="text-5xl text-center text-cyan-400 mb-10 mt-10">My Toys: {myToys.length}</h2>
            <div className="overflow-x-auto w-full p-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Updation</th>
                            <th>Deletion</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToyDetails
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></MyToyDetails>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;