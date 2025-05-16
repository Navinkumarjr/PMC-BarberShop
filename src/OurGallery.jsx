import React  from "react";
import gallery1 from './gallery1.jpg'
import gallery2 from './gallery2.jpg'
import gallery6 from './gallery6.jpg'
import gallery4 from './gallery4.jpg'
import gallery5 from './gallery5.jpg'
import gallery7 from './gallery7.jpg'
function OurGallery() {
    return(
        <>
        <div className="container">
        <h2 class="text-center mb-4 fw-bold text-warning" id="gallery">Our Gallery</h2>
        <div className="row text-center">
            <div className="col-6 col-md col-sm-12 col-xs-12 my-2"><img src={gallery1} alt="" srcset="" height={300} width={250} className="galleryimg"/></div>
            <div className="col-6  col-md col-sm-12 col-xs-12 my-2"><img src={gallery2} alt="" srcset=""  height={300} width={250} className="galleryimg"/></div>
            {/* <div className="col-4 col-md col-sm lastimg"><img src={gallery7} alt="" srcset="" height={300} width={300} className="galleryimg"/></div> */}
        </div>
        <div className="row mt-5 text-center">
             <div className="col-6 col-md col-sm-12 col-xs-12 my-2"><img src={gallery4} alt="" srcset="" height={300} width={250} className="galleryimg"/></div>
            <div className="col-6 col-md col-sm-12 col-xs-12 my-2"><img src={gallery5} alt="" srcset="" height={300}  width={250} className="galleryimg"/></div>
            {/* <div className="col-4 col-md col-sm lastimg"><img src={gallery6} alt="" srcset="" height={300} width={300} className="galleryimg"/></div> */}
        </div>
        </div>
        </>
    )
}
export default OurGallery;