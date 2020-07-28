import React from 'react';
import Banner from '../homePage/Banner';
import Skills from '../homePage/Skills';
import Educations from '../homePage/Educations';
import Experience from '../homePage/Experience';
import Projects from '../homePage/Projects';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Educations />
            <Experience />
            <Projects />
        </div>
    );
};

export default HomePage;
