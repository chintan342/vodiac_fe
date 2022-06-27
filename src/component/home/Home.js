import React from "react";
import Header from '../header/Header';
import ProductReleasesandUpdates from '../ProductReleasesandUpdates/ProductReleasesandUpdates';
import Vodiacinpresstv from '../Vodiacinpresstv/Vodiacinpresstv';
import Frequentlyaskedquestions from '../Frequentlyaskedquestions/Frequentlyaskedquestions';
import Footer from '../Footer/Footer';
import Vicon from '../../assets/images/V-icon.png';
import ContentDrivenimg from '../../assets/images/ContentDriven-img.png';
import Dots from '../../assets/images/Dots.png';
import Twitter from '../../assets/images/Tw-Logo.png';
import Diicon from '../../assets/images/Di-Logo.png';
import SocialNetworkIllustration from '../../assets/images/Social-Network-Illustration.png';

function Home() {
    return (
      <>
         <Header/>
       <section>
           <div className="homepageBanner">
               <div className="container">
                 <div className="row">
                   <div className="col-lg-5 col-md-7 col-12">
                   <h2>A unique opportunity for investors.</h2>
                   <p>The Vodiac ecosystem allows circulators and investors to take advantage of the exciting business opportunity.
Join a team of highly seasoned team of entrepreneurs, marketeers, creatives , curators and developers.</p>
                   </div>
                 </div>
               </div>
           </div>
       </section>
       <section>
       <div className="ContentDrivenDevelopment">
              <div className="container">
                <div className="MarketDeatil">
                    <div className="row"> 
                    <div className="col-lg-2">
                    <div className="Vicon">
                        <img src={Vicon} alt="V Icon" />
                      </div>
                    </div>
                      <div className="col-lg-10">
                        <div className="row g-0 borderBottom">
                          <div className="col-md-6">
                          <div className="MarketPrice">
                          <div>
                            <p className="bg1">Market Cap</p>
                            <h3>$307,535,585</h3>
                          </div>
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className="MarketPrice">
                          <div>
                          <p className="bg3">Token Price</p>
                            <h3>$1.56</h3>
                          </div>
                        </div>
                          </div>
                        </div>
                        <div className="row g-0 borderBottom">
                          <div className="col-md-6">
                          <div className="MarketPrice d-flex flex-wrap justify-content-between">
                          <div><p class="bg2">Current Content Library</p><h3>120 titles</h3></div>
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className="MarketPrice d-flex flex-wrap justify-content-between">
                          <div><p class="bg4">Unique views</p><h3>29,000</h3></div>
                        </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 Vodiacoffer">
                  <div className="col-md-6">
                    <img src={ContentDrivenimg} alt="ContentDrivenimg" />
                  </div>
                  <div className="col-md-6">
                    <h2>Content driven development</h2>
                    <img src={Dots} alt="Dots" />
                    <p><span>Content is at the core of the Vodiac offering.</span></p>
                    <p className="mt-2">The Vodiac Content Curation System allows to always deliver the highest quality experiences and movies to take virtual reality entertainment to new heights.</p>
                  </div>
                </div>
              </div>
        </div>
       </section>
       <section>
         <div className="container">
           <div className="row text-center services">
             <div className="col-lg-4 colmd-6 col-12">
               <div><img src={Vicon} alt="V Icon" className="bg-black mx-auto" /></div>
               <h3>Mobile App</h3>
               <img src={Dots} alt="Dots" className="mx-auto"/>
               <p>Cutting-edge streaming service app available for iOS and Android allows customers to access a wide selection of channels and movies through intuitive VR and handheld interface.</p>
             </div>
             <div className="col-lg-4 colmd-6 col-12">
               <div><img src={Vicon} alt="V Icon" className="bg-black mx-auto" /></div>
               <h3>Streaming Service</h3>
               <img src={Dots} alt="Dots" className="mx-auto"/>
               <p>Ultra-high capacity cloud streaming platform allows to serve high-fidelity VR content to milions of customers at the same time accross the world. Unique encryption methods allow to maintain content security.</p>
             </div>
             <div className="col-lg-4 colmd-6 col-12">
               <div><img src={Vicon} alt="V Icon" className="bg-black mx-auto" /></div>
               <h3>E-commerce</h3>
               <img src={Dots} alt="Dots" className="mx-auto"/>
               <p>The highly ergonimic and comfortable Vodiac headset is distributed worldwide through multiple e-commerce platforms including Amazon, Shopify asnd also through major high street retailers.</p>
             </div>
           </div>
         </div>
       </section>
       <section>
         <div className="GlobalStatistics">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5">
                <h2>Global community statistics</h2>
                <div className="d-flex align-items-center followers">
                    <img src={Twitter} alt="Twitter" />
                    <div>
                      <p>Twitter followers</p>
                      <p>150,000 +</p>
                    </div>
                </div>
                <div className="d-flex align-items-center followers">
                    <img src={Diicon} alt="Twitter" />
                    <div>
                      <p className="bg2">Community Discord members</p>
                      <p>80,000 +</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <img src={SocialNetworkIllustration} alt="SocialNetworkIllustration" />
                </div>
              </div>
            </div>
          </div>
          </div>
       </section>
       <ProductReleasesandUpdates/>
       <Vodiacinpresstv/>
       <Frequentlyaskedquestions/>
       <Footer/>
      </>
    );
  }
  
  export default Home;