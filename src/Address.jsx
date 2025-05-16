import React from 'react';

const VisitShopSection = () => {
  return (
    <div className="container py-5 text-white mt-5" style={{ backgroundColor: '#121212',borderRadius:"10px" }}>
      <h2 className="text-center text-warning fw-bold mb-4">Visit Our Shop</h2>
        <div className="text-center">
          <h5 className="text-warning">Our Location</h5>
          <p>Conveniently located in Denton, TX:</p>
<div className="row justify-content-center align-items-center text-center mt-5">
        <div className="col">
<iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6677.436013143428!2d-97.139219!3d33.195268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca568f955555%3A0x9c6f219a185dbb42!2s518%20Acme%20St%20unit%20101%2C%20Denton%2C%20TX%2076205!5e0!3m2!1sen!2sus!4v1747385515571!5m2!1sen!2sus"
          width="500"
          height="400"
          style={{ border:0,borderRadius:"10px"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Barber Shop"
         ></iframe>
        </div>
        <div className="col">
          <div className="mb-3">
            <h6 className="text-warning"><i className="bi bi-geo-alt-fill me-2"></i>Address</h6>
            <p>518 Acme St unit 101,<br />Denton, TX 76205,<br />United States</p>
          </div>

          <div className="mb-4">
            <h6 className="text-warning"><i className="bi bi-telephone-fill me-2"></i>Phone</h6>
            <p><a href="tel:+19408081569" className="text-decoration-none text-light">+1 940-808-1569</a></p>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning fw-semibold"
            >
              <i className="bi bi-geo-alt-fill me-2"></i>Get Directions
            </a>
            <a
              href="tel:+19408081569"
              className="btn btn-outline-warning text-warning fw-semibold"
            >
              <i className="bi bi-telephone-fill me-2"></i>Call Us
            </a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitShopSection;
