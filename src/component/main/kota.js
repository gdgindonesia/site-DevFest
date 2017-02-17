import React, { Component } from 'react';
import HeaderKota from '../headerkota';
import Footer from '../footer';
import Location from '../location';
import Speaker from '../speaker';
import Acara from '../acara';
import Map from '../map';
import Partner from '../partner';

class Kota extends Component{

  render() {
  let json = require('../data.js');
let acara;
  if (json.getSubtitle(this.props.kota).kota !="Bogor") {
    if(json.getSubtitle(this.props.kota).kota =="Depok"){
        acara= ( <Acara title={'Hackathon'} lists={json.getDaftarAcaraKota(this.props.kota, "workshops")}/>);

    }
    else{
    acara= ( <Acara title={'Codelabs'} lists={json.getDaftarAcaraKota(this.props.kota, "workshops")}/>);
  }
  }
    else {
    acara="";

    }

  return (
    <div>
      <HeaderKota title={json.datamain.header.title} subtitle={json.getSubtitle(this.props.kota).kota} caption={json.getSubtitle(this.props.kota).tgl} desc={json.datamain.header.description}/>

      <Location lists={json.getRegisterAcara(this.props.kota)}/>
      <div className="container">
        <Speaker lists={json.getSpeakerKota(this.props.kota)}/>
        <Acara title={'Conference'} lists={json.getDaftarAcaraKota(this.props.kota, "seminars")}/>
        {acara}




      </div>
      <Map nama={this.props.kota}  kota={this.props.kota} alamat={this.props.alamat} email={this.props.email} />
      <div className="container">
        <Footer main={json.datamain.logo_gdg_indonesia} links={json.getFooterLogo()}/>
        <Partner partner="Venue Partner" links={json.getVenueLogo()} />
                {/*  <Partner partner="Community Partner" links={json.getCommunityLogo()}/> */}
        <Partner partner="Media Partner" links={json.getPartnerLogo()}/>
      </div>

    </div>
  );
}
}

export default Kota;
