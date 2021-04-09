import React from "react";
import ReactDOM from "react-dom";
import App from "./App.mdx";
import {MDXProvider} from '@mdx-js/react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import words from './words/words'
import Hoverlink from "./items/hoverlink.jsx";

const components = {
    a: Hoverlink,
    li: props => <li {...props} style={{listStyleType: "none"}}/>
}

ReactDOM.render(
    <MDXProvider components={components}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                {Object.keys(words).map( word => {
                    const component = words[word]
                    return <Route exact path={"/" + word} component={component}/>
                })}
            </Switch>
        </Router>
    </MDXProvider>
, document.getElementById("root"));
