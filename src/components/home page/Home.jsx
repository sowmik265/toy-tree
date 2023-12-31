import React from 'react';
import AnimationText from './AnimationText';
import Banner from './Banner';
import Category from './Category';
import Gallary from './Gallary';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div className='container p-5'>
            <Banner></Banner>
            <Gallary></Gallary>
            <AnimationText></AnimationText>
            <Category></Category>
            <HomeCard></HomeCard>
            

        </div>
    );
};

export default Home;