import React from 'react';
import AnimationText from './AnimationText';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div className='container p-5'>
            <Category></Category>
            <Banner></Banner>
            <AnimationText></AnimationText>
            
        </div>
    );
};

export default Home;