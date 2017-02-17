import React, { Component } from 'react';

class Footer extends Component{
  render(){
    let logoCSS;
    let listCSS;
    if(this.props.partner=="Media Partner"){
      logoCSS = "logo-footer-partner";
      listCSS="list-inline list-inline-partner list-image-footer";
    }
    else{
      logoCSS = "logo-footer-box";
      listCSS="list-inline list-inline-partner list-image-footer-box";
    }

    return (
      <div className="container-fluid nav-section-item section-footer">
        <div className="row">
          <div className="col-sm-12 text-center">
            <ul className="list-unstyled">
              <li className="section-item-label">
                <span>{this.props.partner}</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-fit text-center">
            <ul className= {listCSS} >
              {this.props.links.map(function(link, key){
                return (
                  <li key={key}>
                    <a href={link[1]}><img className={logoCSS} role="presentation" key={key} src={link[0]} /></a>
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
