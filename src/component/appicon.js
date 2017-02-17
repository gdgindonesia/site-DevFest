import React, { Component } from 'react';

class AppIcon extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-appicon">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-fit">
            <ul className="list-inline text-center">
              {this.props.lists.map(function(list, key){
                return(
                  <li key={key} className="appicon-item">
                    <ul className="list-unstyled">
                      <li className="appicon-image"><img className="img-circle" src={list[0]} alt={list[0]}/></li>
                      <li className="appicon-caption">
                        <span>{list[1]}</span>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppIcon;
