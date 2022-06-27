import React from "react";
import {Accordion,} from 'react-bootstrap'
import Dots from '../../assets/images/Dots.png';


function Frequentlyaskedquestions() {
    return (
      <>
      <section>
        <div className="Frequentlyaskedquestions">
          <div className="container">
              <div className="col-12 text-center">
                  <h2>Frequently asked questions</h2>
                  <img src={Dots} alt="Dots" className="mx-auto my-4"/>
              </div>
              <div className="col-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>What actually is Vodiac?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Stre
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>What is the Vodiac Token?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Streaming App. Simply place your smartphone in the headset and enter a world of amazing immersive virtual reality
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>What is the Vodiac Token?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Streaming App. Simply place your smartphone in the headset and enter a world of amazing immersive virtual reality
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>What is the Vodiac business proposition?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Streaming App. Simply place your smartphone in the headset and enter a world of amazing immersive virtual reality
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                <Accordion.Header>Why buy a stake in the Vodiac token?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Streaming App. Simply place your smartphone in the headset and enter a world of amazing immersive virtual reality
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                <Accordion.Header>Current and future utility?</Accordion.Header>
                <Accordion.Body>
                Vodiac is a  landscape changing, in-home virtial reality entertainment brand. The consumer proposition compromises of  a Vodiac VR Headset and the  Vodiac Mobile Streaming App. Simply place your smartphone in the headset and enter a world of amazing immersive virtual reality
                </Accordion.Body>
                </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-12 mt-5 text-center">
                  <button className="btn-secondary">see all FAQs</button>
              </div>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Frequentlyaskedquestions;