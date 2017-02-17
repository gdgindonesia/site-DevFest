import  React, {Component } from 'react';

class BannerImage extends Component{
  render(){
    return(
      <img className="bannerimage-image" src={this.props.image} alt={this.props.image} />
    );


  }
}

export default BannerImage;
