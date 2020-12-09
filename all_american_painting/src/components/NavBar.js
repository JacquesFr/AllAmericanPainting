import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavLink from './NavLink';

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
            links[j].isActive = i == j;
        }
        this.setState({links:links});
    }
    
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light justify-content-center" >
                    <div class="mx-auto">   
                        <ul class="nav justify-content-center">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">

                                    <ul class="navbar-nav">
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
            
        )
    }
}

export default NavBar;