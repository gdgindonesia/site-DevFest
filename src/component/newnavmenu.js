import React, { Component } from 'react';

import Navbar from './navbar';

class NewNavMenu extends Component{
  render(){
return (
  <div className="container-fluid nav-section-item section-navmenu">
  <nav className="navbar navbar-default navbar-navmenu navbar-fixed-top">
  <Navbar/>
  <div className="container-fluid">

    <div className="navbar-header navbar-navmenu-tab">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
        <li className="nav navbar-nav"><img className="icon-navmenu" src={this.props.icon} alt={this.props.icon}/></li>
    </div>

    <div className="collapse navbar-collapse" id="navbar1">
      <ul className="nav navbar-nav" role="tablist" id="navtabs">

      <li><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
      {this.props.navs.map(function(nav, key){
        return(
          <li key={key} role="presentation">
            <a   href={'#'+nav[1]} id={'nav-menu-'+nav[1]} aria-controls={nav[1]} role="tab" data-toggle="tab">{nav[0]}</a>
          </li>
        );
      })}

      </ul>

    </div>
  </div>
</nav>
    </div>
);
}

}
export default NewNavMenu;
