import React from "react";
import hero from './hero.webp'
function Intro() {

return(
    <>
    <div className="row display-flex align-items-center justify-content-center" id="top">
        <div className="col col-md col-sm">
        <img src={hero} height={380} className="heroPhoto"/>
        </div>
        <div className="col col-md text-center px-5 py-5">
            <h5 className="text-warning px-5 py-2 mt-5" >Premium Barber Services in Denton</h5>
            <h2 className="display-1  px-5 " style={{fontWeight:'bolder',fontSize:'48px'}}><b className="text-white">Classic Cuts, Modern Style</b>
                <br /> <span className="text-warning" style={{fontWeight:'bolder',fontSize:'48px'}}><b>Premium Barber Shop</b></span></h2>
            <h3 className="text-white pt-3 px-5" style={{fontSize:'16px'}}>At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.</h3>
            <button className="btn btn-secondary mx-5 mt-2"><i class="bi bi-geo-alt"></i>Denton,TX</button>
<br />
        <div className="mx-5 mt-4">
            <button className="btn btn-dark text-white px-5">Our Services</button>
            <button className="btn btn-warning px-5"> <span className="bi bi-telephone"></span> Book a call</button>
        </div></div>
    </div>
    </>
)

}
export default Intro;