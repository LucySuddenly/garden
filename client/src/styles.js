import React from "react";
import DynaLink from './items/dynalink'

const styles = {
    a: DynaLink,
    li: props => <li {...props} style={{listStyleType: "none"}}/>
}

export default styles