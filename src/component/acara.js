import React, { Component } from 'react';
import AcaraList from './acaralist';

class Acara extends Component{
  style(){
    return {
      table:{
        marginBottom: '0px'
      },
      row: {
        height: '50px',
      },
      title: {
        width: '100%'
      },
      waktu: {
        width: '100px',
        paddingLeft: '10px',
        paddingTop: '1.5%'
      },
      caption: {
        width: '100%',
      }
    };
  }
  render(){
    let style = this.style();
    return (
      <div className="container-fluid nav-section-item section-acara">
        <div className="row">
          <div className="col-sm-12 section-acara-title">
            <span className="label-title">
              {this.props.title}
            </span>
          </div>
          <AcaraList lists={this.props.lists}/>
          <div className="col-xs-12 col-fit">
            <div className="table-responsive view-collapse">
              <table className="table table-hover" style={style.table}>
                <tbody>
                  {this.props.lists.map(function(list, key){
                    return(
                      <tr key={key} className="section-acara-list acara-list-item" style={style.row}>
                        <td className="acara-waktu" style={style.waktu}><span className="list-sub-title">{list[1]}</span></td>
                        <td>
                          <ul className="list-unstyled">
                            <li className="acara-title" style={(()=>{if(list[2].length === 0){return {transform: 'translateY(5px)'}; }})()}><span className="list-title">{list[0]}</span></li>
                               {(()=>{
                                if(list[2].length > 0){
                                  return(
                                        <li className="acara-caption"><span className="list-caption">{list[2]}</span></li>
                                  );
                                }
                              })()}
                 
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acara;

// <ul className="list-unstyled">
//   <li className="acara-title"><span className="list-title">{list[0]}</span></li>
//   <li className="acara-waktu"><span className="list-sub-title">{list[1]}</span></li>
//   <li className="acara-caption"><span className="list-caption">{list[2]}</span></li>
// </ul>
