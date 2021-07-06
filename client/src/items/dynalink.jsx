import React from 'react';
import {Link} from 'react-router-dom';


const DynaLink = props => {
    const {children, href} = props
    
    if (href.startsWith("http")){
        return (
            <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>
        );
    }

    return (
        <Link to={href}>{children}</Link>
    );
}

export default DynaLink;
