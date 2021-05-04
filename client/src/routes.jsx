
import React from 'react';
import App from "./App.mdx";
import { MDXProvider } from '@mdx-js/react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import words from './words/words'
import styles from './styles'

const routes = () => {
    return (
        <MDXProvider components={styles}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} key="app"/>
                    {Object.keys(words).map( (word) => <Route exact path={"/" + word} component={words[word]} key={word}/> )}
                </Switch>
            </Router>
        </MDXProvider>
    );
}

export default routes;

