import React, { Component } from 'react';

class Speaker extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-speaker">
        <div className="row">
          <div className="col-sm-12 text-center">
            <ul className="list-unstyled">
              <li className="speaker-label"><span>Speakers</span></li>
            </ul>
          </div>
          <div className="col-sm-12">
            <ul className="list-inline text-center">
              {this.props.lists.map(function(list, key){
                return(
                  <li key={key} className="speaker-item">
                    <div className="row">
                      <div className="col-xs-12 text-center">
                        <ul className="list-unstyled">
                          <li>
                            <img className="speaker-image img-thumbnnail img-circle" role="presentation" src={list[0]}/>
                          </li>
                          <li className="speaker-caption">
                            <span className="text-title">
                              {list[1]}
                            </span>
                          </li>
                          <li>
                            <span className="speaker-position">
                              {list[2]}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Speaker;
