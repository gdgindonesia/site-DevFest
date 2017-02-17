import React, { Component } from 'react';
import NewNavMenu from './component/newnavmenu';
import Home from './component/main/home';
import Kota from './component/main/kota';
import Bottom from './component/bottom';


class App extends Component {

  render() {

    let json = require('./component/data.js');

    return (

      <div>
        <div className="container">
          <NewNavMenu
            icon={json.datamain.logo_gdg_home}
             navs={json.getNavmenu()}
            />
        </div>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="home">
            <Home/>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Depok">
            <Kota kota="Depok"/>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Jakarta">
            <Kota kota="Jakarta" alamat="Grogol"/>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Bogor">
            <Kota kota="Bogor"/>
          </div>

          <div role="tabpanel" className="tab-pane fade" id="Semarang">
            <Kota kota="Semarang"/>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Surabaya">
            <Kota kota="Surabaya"/>
          </div>

          <div role="tabpanel" className="tab-pane fade" id="Yogyakarta">
            <Kota kota="Yogyakarta"/>
          </div>
        </div>
        <Bottom links={json.getSosmedLogo()} lists={['GDG DevFest 2016']}/>
      </div>
    );
  }
}

export default App;
