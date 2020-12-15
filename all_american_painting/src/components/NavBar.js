import React, { Component } from 'react';
import NavLink from './NavLink';
import './styles.css';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {path: "/", text:"Home", isActive:false},
                {path: "/Commercial", text:"Commercial Painting", isActive:false},
                {path: "/Residential", text:"Residential Painting", isActive:false},
                {path: "/Process", text:"Our Process", isActive:false},
                {path: "/Contact", text:"Contact Us", isActive:false}
            ]
        }
    }

    handleClick(i){
        const links = this.state.links.slice();
        for(const j in links){
            links[j].isActive = i === j;
        }
        this.setState({links:links});
    }
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light justify-content-center" >
                    <div className="mx-auto">   
                        <ul className="nav justify-content-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav">
                                        {this.state.links.map((link, i) =>
                                            <NavLink
                                                path={link.path}
                                                text={link.text}
                                                isActive={link.isActive}
                                                key={link.path}
                                                onClick={() => this.handleClick(i)}
                                            />
                                        )}
                                    </ul>
                            </div>
                        </ul> 
                    </div>
                </nav>
            </div>   
        );
    }
}

export default NavBar;