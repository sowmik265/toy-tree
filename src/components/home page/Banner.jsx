import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div className="relative bg-gray-900 container mx-auto mt-4 md:rounded-l-full border overflow-hidden">
            <img className="w-full h-auto object-cover md:h-72 lg:h-96" src="https://i.ibb.co/8MkQGdG/sandy-millar-nu-S2-GDp-CDo-I-unsplash.jpg" alt="Banner Image" />
            <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4">Welcome to TOYTREE!</h2>
                <p data-aos="fade-up"
                    data-aos-duration="3000" className="text-yellow-300 text-xl mb-8">Discover endless joy with our captivating collection of car toys that fuel imagination and ignite thrilling playtime adventures</p>
                <a href="#" className="bg-transparent hover:bg-rose-600 text-gray-400 font-bold py-2 px-4 rounded">Learn More</a>
            </div>
        </div>
    );
};

export default Banner;