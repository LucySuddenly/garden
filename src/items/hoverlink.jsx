import React from 'react';
import {Link} from 'react-router-dom';


const Hoverlink = props => {
    const {children, href} = props
    
    if (href.includes("http")){
        return (
            <a {...props}></a>
        );
    }
    return (
        <Link to={children}>{children}</Link>
    );
}

export default Hoverlink;
