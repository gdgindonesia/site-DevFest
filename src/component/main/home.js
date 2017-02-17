import React, { Component } from 'react';
import Footer from '../footer';
import Header from "../header";
import About from '../about';
import AppIcon from '../appicon';
import Carousel from '../carousel';
import Partner from '../partner';

class Home extends Component {

  render() {

    let json = require('../data.js');

    return (
      <div>

          <Header title={json.datamain.header.title} desc={json.datamain.header.description}/>

        <AppIcon lists={json.getAppIcon()}/>
        <div className="container">
          <About lists={[
              ['What is GDG?', json.datamain.about_gdg.gdg],
              ['What is GDG DEVFEST?', json.datamain.about_gdg.gdgdevfest]
            ]}/>
        </div>
        <Carousel image={json.datamain.bannerimage} lists={json.imageCarousel}/>
        <div className="container">
          <Footer
            main={json.datamain.logo_gdg_indonesia}
            links={json.getFooterLogo()}
          />


          <Partner partner="Venue Partner" links={json.getVenueLogo()} />
        {/*  <Partner partner="Community Partner" links={json.getCommunityLogo()}/> */}
          <Partner partner="Media Partner" links={json.getPartnerLogo()}/>




        </div>
      </div>
    );
  }
}

export default Home;
