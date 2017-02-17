
import React, { Component } from 'react';
class Carousel extends Component{
  render(){
    return (


  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <div className="carousel-inner cover" role="listbox">
    <div className="item active">
      
      <img src="https://s3-ap-southeast-1.amazonaws.com/gdgdevfest/GDG-Foto1.jpg" alt="Conference Google" width="460" height="345"/>
    </div>
    {this.props.lists.map(function(list, key){
      return(
        <div className="item ">
          <img key={key[0]} src={list[0]} alt="" width="460" height="345"/>
        </div>
    );
  })}



    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

);
}
}
export default Carousel;
