import React, { Component } from 'react';

class Bottom extends Component{
  render(){
    return (
      <div className="section-bottom text-center">
        <ul className="list-inline">
            {this.props.links.map(function(link, key){
              return (
                <li key={key} className="pull-left">
                <a href={link[1]}>  <img className="logo-bottom " role="presentation" key={key} src={link[0]} /></a>
                </li>
              );
            })}



          {this.props.lists.map(function(list, key){
            return(
              <li key={key} className="text-bottom">
                <span>{list}</span>
              </li>
            );
          })}
          <li className="pull-right hidden-bottom "><span>Designed by <a href="http://www.crocias.com" target="_blank">Crocias</a></span></li>
        </ul>
      </div>
    );
  }
}

export default Bottom;
