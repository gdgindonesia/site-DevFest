import React, { Component } from 'react';

class Map extends Component{




  render(){
    return (
      <div className="map-container">
        <div className="map" id={'map-location-' + this.props.kota}></div>
        <div className="panel panel-default map-panel section-hidden-mobile">
          <div className="panel-body">
            <p className="map-header">
              Location
            </p>
            <p className="map-nama">{this.props.nama}</p>
            <p className="map-alamat">{this.props.alamat}</p>
            <p className="map-email">
              <a href={'mailto:'+this.props.email}>{this.props.email}</a></p>
            <p className="map-waktu">{this.props.waktu}</p>
          </div>
        </div>
      </div>
    );
  }



}

export default Map;
