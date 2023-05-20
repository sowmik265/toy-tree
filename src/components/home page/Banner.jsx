import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-gray-900 container mx-auto mt-10 rounded-l-full">
            <img className="w-full h-auto object-cover md:h-72 lg:h-96" src="https://i.ibb.co/n68ydJn/pexels-leonardo-luz-14785920.jpg" alt="Banner Image" />
            <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-yellow-200 text-3xl md:text-4xl font-bold mb-4">Welcome to chefSteps!</h2>
                <p className="text-yellow-400 text-xl mb-8">chefSteps offer a vast selection of recipes for all types of cuisines and skill levels. We include Allrecipes, Food Network, Epicurious, and Bon Appétit, with easy-to-follow instructions and ingredient lists</p>
                <a href="#" className="bg-transparent hover:bg-yellow-400 text-yellow-200 font-bold py-2 px-4 rounded">Learn More</a>
            </div>
        </div>
    );
};

export default Banner;