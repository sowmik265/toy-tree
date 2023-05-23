import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import UpdateToyModal from './UpdateToyModal';

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [modalShow, setModalShow] = React.useState(false);
    const [control, setControl] = useState(false);

    const url = `https://toy-tree-server-two.vercel.app/toy?email=${user?.email}`;
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
            fetch(`https://toy-tree-server-two.vercel.app/toy/${id}`, {
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

    const handleToyUpdate = (data) => {
        console.log(data);
        fetch(`https://toy-tree-server-two.vercel.app/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                }
                console.log(result);
            });
    };


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
                            <th>Status</th>
                            <th>Deletion</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(myToy => (
                                <tr>
                                    <td> {myToy?.seller} </td>
                                    <td> {myToy?.name} </td>
                                    <td> {myToy?.category} </td>
                                    <td> {myToy?.price} </td>
                                    <td> {myToy?.quantity} </td>
                                    <td><label htmlFor="my-modal-6" className="btn 'bg-red-600 px-4 py-1 rounded font-bold text-gray-300">Update</label>


                                        <UpdateToyModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            myToy={MyToy}
                                            handleToyUpdate={handleToyUpdate}
                                        />

                                    </td>


                                    <td>

                                        <button onClick={() => handleDelete(myToy?._id)} className='bg-red-600 px-4 py-1 rounded font-bold text-gray-300'>Delete</button></td>
                                </tr
                                >))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;