import React from "react";
import DynaLink from './items/dynalink';
import DynaImg from "./items/dynaimg";

// TODO: define CSS-in-JS object and pass to components

const styles = {
    a: DynaLink,
    img: props => <DynaImg {...props} style={{width: "50%"}}/>, 
    li: props => <li {...props} style={{listStyleType: "none"}}/>
}

export default styles