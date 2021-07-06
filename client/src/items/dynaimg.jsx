import React, {useState, useEffect} from 'react';
import _ from 'url:../../public/nes.jpg'

const DynaImg = props => {
    const { src } = props
    
    // external images
    if (src.startsWith("http")){
        return (
            <img {...props} />
        );
    }

    // internal images
    const [image, setImage] = useState(null);
    useEffect(() => import(src).then( file => setImage(file.default)), []);

    // strip src prop
    const propsCopy = {...props}
    delete propsCopy.src

    return (
        <img {...propsCopy} src={image}/>
    );
}

export default DynaImg;
