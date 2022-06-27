import React from "react";
import Dots from '../../assets/images/Dots.png';
import Vrmenu from '../../assets/images/vrmenu.png';
import Uscanadaupdate from '../../assets/images/uscanada-update.png';
import Ecommerce from '../../assets/images/e-commerce.png';
import launchedition from '../../assets/images/launch-edition.png';


function ProductReleasesandUpdates() {
    return (
      <>
   <section>
       <div className="ProductReleasesandUpdates">
       <div className="container">
        <div className="row">
            <div className="col-12">
                <h2>Product releases and updates</h2>
                <p>Stay in touch with the latest news and developments as we execute the business strategy. Read about upcoming releases and check the business updates</p>
                <img src={Dots} alt="Dots"  className="mx-auto"/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={Vrmenu} alt="Vrmenu"/>
                    </div>
                    <div className="proupdatedetail">
                        <h4>In VR menu now live</h4>
                        <p>Proud to launch an transformative , exciting  new standard in home VR entertainment ... </p>
                        <p>Released December 2021</p>
                        <button className="btn-primary">Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={Ecommerce} alt="Vrmenu"/>
                    </div>
                    <div className="proupdatedetail">
                        <h4>E-commerce active</h4>
                        <p>Vodiac offers consumer  e-commerce through Shopify and Amazon UK ... </p>
                        <p>Released 20th May 2022</p>
                        <button className="btn-primary">Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={Uscanadaupdate} alt="Vrmenu"/>
                    </div>
                    <div className="proupdatedetail">
                        <h4>US & Canada update</h4>
                        <p>Release is planned for the launch into these territories for June 2022 ... </p>
                        <p>Released 25th May 2022</p>
                        <button className="btn-primary">Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex flex-wrap align-items-center">
                    <div>
                        <img src={Uscanadaupdate} alt="Vrmenu"/>
                    </div>
                    <div className="proupdatedetail">
                        <h4>Launch edition is go!</h4>
                        <p>Vodiac 1.0 is a transformative, exciting, new standard for in home VR entertainment ...</p>
                        <p>Released 20th February 2022</p>
                        <button className="btn-primary">Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-12 SeeallProduct">
                <button className="btn-secondary">see all product updates</button>
            </div>
        </div>
       </div>
       </div>
       
   </section>
      </>
    );
  }
  
  export default ProductReleasesandUpdates;