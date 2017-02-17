import React, { Component } from 'react';

class Location extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-location">
        <div className="row section-location-content">
          <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="row">
              <div className="col-sm-12">
              {/*  <span className="section-title">Rise of the Machines!</span>*/}
              </div>
              <ul className="list-unstyled">
                <li>
                  <div className="col-sm-12">
                    <div className="row">
                      {this.props.lists.map(function(list, key){
                        return(
                          <div className="col-sm-6 section-location-item" key={key}>
                            <ul className="list-unstyled">
                              <li className="location-title">{list[0]}</li>
                              <li className="location-list-item">
                                <ul className="list-inline location-detail">
                                  <li><i className="fa fa-map-marker"></i></li>
                                  <li className="location-text location-text-caption">{list[1]}</li>
                                </ul>
                              </li>
                              <li className="location-list-item">
                                <ul className="list-inline location-detail">
                                  <li><i className="fa fa-calendar"></i></li>
                                    <li className="location-text ">{list[2]}<br/>{list[3]}</li>

                                </ul>
                              </li>
                              <li className="location-link"><a href={list[4][1]}>{list[4][0]}</a></li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
