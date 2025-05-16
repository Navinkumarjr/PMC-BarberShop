import React from "react";
import about from './about.jpg'
function About() {
    
    return(
        <div className="container text-center" id="about" style={{background:'#000',borderRadius:'12px'}}>
            <div className="row">
            <div className="col col-sm">
                <img src={about} height={380} style={{borderRadius:'10px'}}/>
            </div>
            <div className="col col-sm">
                <h3 className="text-warning text-center p-3">About PMC Barbershop</h3>
                <p className="text-white text center mt-2 p-2" style={{borderBottom:'solid #E9C637 2px'}}>
                    Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
                </p>
                <blockquote className="text-secondary">
    "We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle."
                </blockquote>
            </div>
            </div>
        </div>
    );
}

export default About;