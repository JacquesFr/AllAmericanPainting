import React, { Component } from 'react';
import './myStyle.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, Commercial, Residential, Process, Contact } from './pages' ;


const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/Commercial' component={Commercial} />
            <Route exact path = '/Residential' component={Residential} />
            <Route exact path = '/Process' component={Process} />
            <Route exact path = '/Contact' component={Contact} />

        </Switch>
    </main>
)

class NavLink extends Component {
    render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link className="nav-link" to={this.props.path}>{this.props.text}</Link>
        </li>
      );
  }
}

const Header1 = () => (
    <div>
        <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light justify-content-center" >
        <div class="mx-auto">   
            <ul class="nav justify-content-center">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">

                        <ul class="navbar-nav justify-content-center">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Commercial" >Commercial Painting</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Residential" >Residential Painting</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Process" >Our Process</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Contact" >Contact Us</Link>
                                </li>
                            </ul>
                    </div>
            </ul> 
        </div>
    </nav>
  </div>
)

const App = () => (
    <div>
        <Header1 />
        <Main />
    </div>
)

export default App;
/*class App extends React.Component {
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
*/
