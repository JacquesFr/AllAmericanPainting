import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Route from './components/Route';
import Commercial from './components/Commercial';
import Residential from './components/Residential';
import Contact from './components/Contact';
import Process from './components/Process';


class App extends React.Component {
    render() { 
        return (
            <div>
                 <Header />
                

                <Route path="/">
                    <Home />
                </Route>
                <Route path="/Commercial">
                    <Commercial />
                </Route>
                <Route path="/Residential">
                    <Residential />
                </Route>
                <Route path="/Process">
                    <Process />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>

                

            </div>
        );
    }
};

export default App;