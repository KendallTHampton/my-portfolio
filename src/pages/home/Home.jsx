import React from 'react';
import {useRef} from 'react';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Background from './Background';



const Home = () => {
    return (
        <>
            <HeroSection />
            <Projects />
            <Background />
        </>
    );
};

export default Home;
