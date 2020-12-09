import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Commercial from './Commercial';
import Residential from './Residential';
import Process from './Process';
import Contact from './Contact';

const Pages = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Commercial" component={Commercial}/>
            <Route exact path="/Residential" component={Residential}/>
            <Route exact path="/Process" component={Process}/>
            <Route exact path="/Contact" component={Contact}/>
        </Switch>
    </main>
)

export default Pages;