import React, { Component } from 'react';

class About extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-about">
        <div className="row">
          <div className="col-xs-12 col-xs-offset-0">
            <div className="row">
              {this.props.lists.map(function(list, key){
                return(
                  <div key={key} className="col-sm-6">
                    <ul className="list-unstyled">
                      <li>
                        <span className="about-title">
                          {list[0]}
                        </span>
                      </li>
                      <li>
                        <p className="about-content">
                          {list[1]}
                        </p>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <ul className="list-inline">
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
