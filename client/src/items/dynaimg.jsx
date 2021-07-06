import React from 'react';
import images from '../../public/images/images.js'

const DynaImg = props => {
    const { src } = props
    
    // external images
    if (src.startsWith("http")){
        return (
            <img {...props} />
        );
    }

    // internal images

    // strip src prop
    const propsCopy = {...props}
    delete propsCopy.src

    return (
        <img {...propsCopy} src={images[src]}/>
    );
}

export default DynaImg;
