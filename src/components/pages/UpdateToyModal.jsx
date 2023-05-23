import React from 'react';

const UpdateToyModal = (props) => {


    const { handleToyUpdate } = props;
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleToyUpdate} className=' p-2'>
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
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToyModal;