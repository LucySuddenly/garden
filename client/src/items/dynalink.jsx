import React from 'react';
import {Link} from 'react-router-dom';


const DynaLink = props => {
    const {children, href} = props
    
    if (href.includes("http")){
        return (
            <a {...props}></a>
        );
    }
    console.log("HA")
    return (
        <Link to={children}>{children}</Link>
    );
}

export default DynaLink;
