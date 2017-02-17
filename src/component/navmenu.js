import React, { Component } from 'react';

import Navbar from './navbar';

class NavMenu extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-navmenu">
        <nav className="navbar navbar-default navbar-navmenu navbar-fixed-top">
          <Navbar/>
          <ul className="nav nav-tabs navbar-navmenu-tab " role="tablist">
            <li><img className="icon-navmenu" src={this.props.icon} alt={this.props.icon}/></li>
            <li><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
            {this.props.navs.map(function(nav, key){
              return(
                <li key={key} role="presentation">
                  <a href={'#'+nav[1]} id={'nav-menu-'+nav[1]} aria-controls={nav[1]} role="tab" data-toggle="tab">{nav[0]}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }


export default NavMenu;
