import React from "react";

function Ourservices() {


    return(
        <>  <div class="container py-5">
  <h2 class="text-center mb-4 fw-bold text-warning" id="services">Our Services</h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

    <div class="col">
      <div class="card text-center p-3 service-card bg-dark">
        <i class="bi bi-scissors text-white pb-4 service-icon"></i>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">Classic Haircut</h5>
          <p class="card-text">Sharp, stylish cuts tailored to your look.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center p-3 service-card bg-dark">
        <i class="bi bi-person-lines-fill text-white  service-icon"></i>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">Beard Services</h5>
          <p class="card-text">Trimming, shaping, and styling for a bold look.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center p-3 service-card bg-dark">
        <i class="bi bi-palette text-white  service-icon"></i>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">Hair Coloring</h5>
          <p class="card-text">Modern colors and highlights to express yourself.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center p-3 service-card bg-dark">
        <i class="bi bi-stars text-white service-icon"></i>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">Premium Package</h5>
          <p class="card-text">Full grooming experience for a refreshed look.</p>
        </div>
      </div>
    </div>

  </div>
</div>
</>

    )
}
export default Ourservices;