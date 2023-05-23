import React from 'react';
import Swal from 'sweetalert2';

const AddAToy = () => {

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newToy = { name, quantity, seller, email, category, details, price, rating, photo }

        console.log(newToy);

        // send data to server
        fetch('https://toy-tree-server-two.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you!'
                    })
                }
                // form.reset();
            })
    }

    return (
        <div className="md:p-24 bg-cyan-700 mt-10 mx-2 md:mx-10">
            <h2 className="text-3xl font-semibold text-center text-gray-300 uppercase">Add a Toy</h2>
            <form onSubmit={handleAddToy} className=' p-2'>
                {/* Name & quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text block text-sm font-semibold text-gray-300">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Car Name" className="input input-bordered text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300 ">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                </div>
                {/* seller & email */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                </div>
                {/* category and Details*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Sub-Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Detail Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                </div>

                {/* price  & ratings */}

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                </div>
                {/* //photo url */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text block text-sm font-semibold text-gray-300">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-rose-300 focus:outline-none focus:bg-rose-600" />

            </form>
        </div>
    );
};

export default AddAToy;