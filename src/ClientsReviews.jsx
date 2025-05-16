import React from "react";

function ClientsReview() {

    return(
    <>
    <div class="container">
        <div class="row justify-content-center">
             <h2 class="text-center my-4 fw-bold text-warning">What Our Clients Say</h2>
            <div class="col-4">
                    <div class="card review-card p-4 bg-dark">
                    <div class="d-flex align-items-center mb-3">
                    <img src={"https://i.pravatar.cc/60?img=33"} alt="" srcset="" className="profile-img me-3" />
                    <div>
                        <h6 class="mb-0 text-white">David Johnson</h6>
                        <small class="text-warning">Hair Coloring</small>
                    </div>
                    </div>
                    <p class="mb-3 text-white">“Absolutely loved the hair coloring service! They listened to exactly what I wanted and the result was fantastic. Will definitely be back!”</p>
                    <div class="star-rating text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    </div>
                </div>
            </div>
            
           <div class="col-4">
                    <div class="card review-card p-4 bg-dark">
                    <div class="d-flex align-items-center mb-3">
                    <img src={"https://i.pravatar.cc/60?img=8"} alt="" srcset="" className="profile-img me-3" />
                    <div>
                        <h6 class="mb-0 text-white">Micheal Harrigtion</h6>
                        <small class="text-warning">Classic HairCut</small>
                    </div>
                    </div>
                    <p class="mb-3 text-white">“The classic haircut was sharp and clean—just what I needed. The barber took his time and made sure everything looked perfect!”</p>
                    <div class="star-rating text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    </div>
                </div>
            </div>
            <div class="col-4">
                    <div class="card review-card p-4 bg-dark">
                    <div class="d-flex align-items-center mb-3">
                    <img src={"https://i.pravatar.cc/60?img=67"} alt="" srcset="" className="profile-img me-3" />
                    <div>
                        <h6 class="mb-0 text-white">Steve</h6>
                        <small class="text-warning">Beard Services</small>
                    </div>
                    </div>
                    <p class="mb-3 text-white">“Absolutely loved the hair coloring service! They listened to exactly what I wanted and the result was fantastic. Will definitely be back!”</p>
                    <div class="star-rating text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    </div>
                </div>
            </div>
            
    </div>
  </div>
  
    </>
    )
}
export default ClientsReview;