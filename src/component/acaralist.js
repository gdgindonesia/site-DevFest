import React, { Component } from 'react';

class AcaraList extends Component{
  render(){
    return (
      <div className="view-collapse-invert">
        <div className="row">
          {this.props.lists.map(function(list, key){
            return(
              <div className="col-sm-12" key={key}>
                <ul className="list-unstyled section-acara-list acara-list-item">
                  <li className="acara-waktu"><span className="list-sub-title">{list[1]}</span></li>
                  <li className="acara-title"><span>{list[0]}</span></li>
                   <li className="acara-caption"><span className="list-caption">{list[2]}</span></li>
        </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AcaraList;
