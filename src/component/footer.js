import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return (
      <div className="container-fluid nav-section-item section-footer">
        <div className="row">
          <div className="col-sm-12 text-center">
            <ul className="list-unstyled">
              <li className="section-item-label">
                <span>Organized by</span>
              </li>
              <li>
                <img className="logo-footer" role="presentation" src={this.props.main}/>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-fit text-center">
            <ul className="list-inline list-image-footer">
              {this.props.links.map(function(link, key){
                return (
                  <li key={key}>
                    <img className="logo-footer" role="presentation" key={key} src={link} />
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

export default Footer;
