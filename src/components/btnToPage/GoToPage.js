import React from 'react';
import {Link} from "react-router-dom";

const GoToPage = ({ link, title }) => {
    return (
        <Link to={link} target="_blank" rel="noreferrer" className="btn-outline">
            {title}
        </Link>
    );
};
export default GoToPage;