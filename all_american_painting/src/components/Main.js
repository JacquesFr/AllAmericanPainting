import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
//import { Home, Commercial, Residential, Process, Contact } from './pages' ;
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