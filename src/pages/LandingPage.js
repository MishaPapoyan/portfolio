import React from 'react';
import LP1 from '../img/landing_pages_examples/LP1.png'
import LP1_1 from '../img/landing_pages_examples/LP1.1.png'

import LP2 from '../img/landing_pages_examples/LP2.png'
import LP2_1 from '../img/landing_pages_examples/LP2.1.png'

import LP3 from '../img/landing_pages_examples/LP3.png'
import LP3_1 from '../img/landing_pages_examples/LP3.1.png'

import LP4 from '../img/landing_pages_examples/LP4.png'
import LP4_1 from '../img/landing_pages_examples/LP4.1.png'

import LP5 from '../img/landing_pages_examples/LP5.png'
import LP5_1 from '../img/landing_pages_examples/LP5.1.png'
import Page from "../components/btnToPage/GoToPage";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
const LandingPage = () => {

    const toProject = (currentProject) => {
        const link = document.createElement('a');
        link.href = currentProject;
        link.target = '_blank'
        link.click();
    };
    return (
            <div className="div___box">
                <h1 className='headline'>Hello welcome to my projects page <br/> here are the some simple landing pages </h1>
                <div className="box">
                    <img className='landing_page_img' src={LP1} alt=""/>
                    <img className='landing_page_img' src={LP1_1} alt=""/>
                    <button onClick={(currentProject) => {toProject('https://landing-page-example-lac.vercel.app')}} className='view__project'>View This Project</button>
                </div>
                <div className="box">
                    <img className='landing_page_img' src={LP2} alt=""/>
                    <img className='landing_page_img' src={LP2_1} alt=""/>
                    <button onClick={(currentProject) => {toProject('https://landing-project2.vercel.app')}} className='view__project'>View This Project</button>

                </div>
                <div className="box">
                    <img className='landing_page_img' src={LP3} alt=""/>
                    <img className='landing_page_img' src={LP3_1} alt=""/>
                    <button onClick={(currentProject) => {toProject('https://landing-page-khaki-kappa.vercel.app')}} className='view__project'>View This Project</button>

                </div>
                <div className="box">
                    <img className='landing_page_img' src={LP4} alt=""/>
                    <img className='landing_page_img' src={LP4_1} alt=""/>
                    <button onClick={(currentProject) => {toProject('https://landing-page-example-9whi.vercel.app')}} className='view__project'>View This Project</button>
                </div>
            </div>
    );
};

export default LandingPage;