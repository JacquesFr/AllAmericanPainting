import React from 'react';
import NavBar from './components/NavBar';
import Pages from './components/Main';
import Banner from './components/Banner';


class App extends React.Component {
    render() { 
        return (
            <div>
                <NavBar />
                <Pages />
                <Banner />
            </div>
        );
    }
};

export default App;

