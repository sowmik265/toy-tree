import React from 'react';
import Animation from '../../../public/animation.json';
import Lottie from 'lottie-react';

const AnimationText = () => {
    return (
        
       
            <div className="bg-rose-100 mt-10 container mx-auto md:rounded-r-full">

                <div className="mx-auto container md:flex md:items-center md:justify-between sm:gap-0">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Lottie animationData={Animation}></Lottie>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:pr-8 p-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">Want some Exclusive Toy Cars?</h2>
                        <p className="text-pink-700 mb-4 font-serif font-semi-bold">Rev up your imagination and explore our car toy marketplace. Find a wide selection of miniature vehicles, tracks, and accessories, fueling endless playtime fun for all ages</p>
                        <a href="/alltoys" className="bg-rose-600 hover:bg-white text-gray-400 font-bold py-2 px-4 rounded">View All Toys</a>
                    </div>
                </div>


            </div>
        
    );
};

export default AnimationText;