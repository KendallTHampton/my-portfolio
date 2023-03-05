import React from 'react';
import HeroSection from './HeroSection';
import Projects from './Projects';

import Background from './Background';




const Home = () => {


    return (
        <div style={{overflow: 'hidden'}}>
            <HeroSection />
            <Projects />
            <Background />
        </div>
    );
};

export default Home;
