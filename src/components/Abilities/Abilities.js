import React from 'react';
import './abilities.css'
import abilities from "../../helpers/abilities";
import {Link} from "react-router-dom";

const Abilities = () => {
    const _abilities = abilities
    const goToGitHub = (currentUrl) => {
        window.open(currentUrl, '_blank');
    };
    return (
        <div className='parent'>

                {_abilities.map((abb) => {
                    return (
                        <div className="box">
                            <ul>
                                <li> title {abb.title}</li>
                                <li> skills {abb.skills}</li>
                                <li> tools {abb.tools}</li>
                                <li> projects <Link to={abb.projects}>To This Project</Link></li>
                            </ul>
                        </div>
                    )
                })}
        </div>
    );
};


// <button onClick=></button>
export default Abilities;