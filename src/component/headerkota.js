import  React, {Component } from 'react';

class HeaderKota extends Component{
  render(){
  return(
    <div className="container-fluid nav-section-item section-header backgorund-header">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <p className="header-title">{this.props.subtitle}</p>
                  <p className="header-tgl">{this.props.caption}</p>
              </div>
              </div>
            <p className="header-caption">{this.props.desc}</p>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default HeaderKota;
