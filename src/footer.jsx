import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
         <hr className="border-secondary my-4" />
        <div className="row gy-4">
          <div className="col-md-3">
            <h3><span className='text-warning'>PMC</span><span className='text-white'>Barbershop</span></h3>
          </div>
          {/* About */}
          <div className="col-md-3">
            <h5 className="text-warning fw-bold mb-3">About Us</h5>
            <p>
              We are a premium barber shop in Denton, TX, offering classic cuts, beard grooming, coloring, and more. 
              Our mission is to give you the perfect look in a relaxing environment.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5 className="text-warning fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Classic Haircut</li>
              <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Beard Services</li>
              <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Hair Coloring</li>
              <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Premium Package</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-3">
            <h5 className="text-warning fw-bold mb-3">Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill text-warning me-2"></i>518 Acme St unit 101, Denton, TX</p>
            <p><i className="bi bi-telephone-fill text-warning me-2"></i>+1 940-808-1569</p>

            <div className="mt-3">
              <a href="https://facebook.com" className="text-warning me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="https://instagram.com" className="text-warning me-3"><i className="bi bi-instagram fs-5"></i></a>
              <a href="https://wa.me/19408081569" className="text-warning"><i className="bi bi-whatsapp fs-5"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center text-muted mb-0">&copy; {new Date().getFullYear()} Barber Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
