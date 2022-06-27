import React from "react";
import globalLunch1 from '../../assets/images/globalLunch1.png'
import globalLunch2 from '../../assets/images/globalLunch2.png'
import globalLunch3 from '../../assets/images/globalLunch3.png'

function Vodiacinpresstv() {
    return (
      <>
      <section>
        <div className="VodiacinPressTv">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5">
                <h2>Vodiac in the press & tv</h2>
                <p>Read all the latest public news from our offical corporate  press and newsroom team</p>
                <p>For more information please contact <span>press@vodiac.com</span></p>
                <button className="btn-secondary">see all press & tv</button>
              </div>
              <div className="col-lg-7 globalLunch">
                <div className="bg-white p-3 mb-3">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={globalLunch1} alt="globalLunch2"/>
                    </div>
                    <div className="globalLunchdetail">
                        <h4>Global Launch of Vodiac</h4>
                        <p>Proud to launch an transformative , exciting  new standard in home VR entertainment ...</p>
                        <p>Released December 2021</p>
                        <button className="btn-primary bg-orange">Read more</button>
                    </div>
                </div>
                </div>
                <div className="bg-white p-3 mb-3">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={globalLunch2} alt="globalLunch"/>
                    </div>
                    <div className="globalLunchdetail">
                        <h4>Global Launch of Vodiac</h4>
                        <p>Proud to launch an transformative , exciting  new standard in home VR entertainment ...</p>
                        <p>Released December 2021</p>
                        <button className="btn-primary bg-orange">Read more</button>
                    </div>
                </div>
                </div>
                <div className="bg-white p-3 mb-3">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={globalLunch3} alt="globalLunch"/>
                    </div>
                    <div className="globalLunchdetail">
                        <h4>Global Launch of Vodiac</h4>
                        <p>Proud to launch an transformative , exciting  new standard in home VR entertainment ...</p>
                        <p>Released December 2021</p>
                        <button className="btn-primary bg-orange">Read more</button>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Vodiacinpresstv;