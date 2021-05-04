
import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import App from "./App.mdx";
import words from './words/words'
import styles from './styles'

const history = createBrowserHistory();

const routes = () => {
    return (
        <MDXProvider components={styles}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App} key="app"/>
                    {Object.keys(words).map( (word) => <Route exact path={"/" + word} component={words[word]} key={word}/> )}
                </Switch>
            </Router>
        </MDXProvider>
    );
}

export default routes;

