import React from "react";

function Pricing() {
    
    return(
        <>
       <div class="container">
  <h2 class="text-center text-warning my-5 fw-bold" id="pricing">Our Service Packages</h2>
  <div class="row g-4 justify-content-center">

    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="pricing-card">
        <div class="pricing-header ">Classic Haircut</div>
        <div class="pricing-body">
          <div class="pricing-price text-white">18$</div>
          <ul class="feature-list">
            <li className="text-white"><i class="bi bi-check-circle-fill text-warning"></i>Consultation & style selection</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Precision haircut with scissors & clippers</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Neck & sideburn shaping</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Final styling with product</li>
          </ul>
          <button class="btn btn-warning w-100 text-dark">Book Now</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="pricing-card">
        <div class="pricing-header ">Beard Services</div>
        <div class="pricing-body">
          <div class="pricing-price text-white">$12$</div>
          <ul class="feature-list">
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Beard trimming & shaping</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Precision razor detailing</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Hot towel treatment</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Beard oil or balm finish</li>
          </ul>
          <button class="btn btn-warning w-100 text-dark mt-5">Book Now</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="pricing-card">
        <div class="pricing-header">Hair Coloring</div>
        <div class="pricing-body">
          <div class="pricing-price text-white">$10</div>
          <ul class="feature-list">
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Color consultation with stylist</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Full or partial color application</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Use of premium color-safe products</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Post-color wash & style</li>
          </ul>
          <button class="btn btn-warning w-100 text-dark mt-4">Book Now</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="pricing-card">
        <div class="pricing-header  ">Premium Package</div>
        <div class="pricing-body">
          <div class="pricing-price text-white mt-4">65$</div>
          <ul class="feature-list">
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Haircut + Beard combo</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Hair coloring of your choice</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Deep scalp massage</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Facial clean-up & pack</li>
            <li className="text-white"><i class="bi bi-check-circle-fill  text-warning"></i>Priority service slot</li>
          </ul>
          <button class="btn btn-warning w-100 text-dark">Book Now</button>
        </div>
      </div>
    </div>

  </div>
</div>

        </>
    )
}

export default Pricing;