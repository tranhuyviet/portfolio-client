import React from 'react';
import Banner from '../homePage/Banner';
import Skills from '../homePage/Skills';
import Educations from '../homePage/Educations';
import Experience from '../homePage/Experience';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Educations />
            <Experience />
        </div>
    );
};

export default HomePage;
