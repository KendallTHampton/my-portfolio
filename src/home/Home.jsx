import React, {useEffect, useRef, useState} from 'react';
import HeroSection from './HeroSection';
import Projects from './Projects';
import {createClient} from '@sanity/client';
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
