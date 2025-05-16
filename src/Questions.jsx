import React from 'react';

const FAQSection = () => {
  return (
    <div className="container py-5 mt-5 " style={{ backgroundColor: '#121212', color: '#f8f9fa',borderRadius:"10px" }}>
      <h2 className="text-center text-warning fw-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-light mb-5">
        Find answers to common questions about our services, appointments, and policies.
      </p>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item bg-dark text-white border-secondary">
          <h2 className="accordion-header" id="headingGeneral">
            <button
              className="accordion-button bg-dark text-warning fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGeneral"
              aria-expanded="true"
              aria-controls="collapseGeneral"
            >
              General
            </button>
          </h2>
          <div id="collapseGeneral" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              <strong>Do you offer any membership or loyalty programs?</strong><br />
              Yes! We offer loyalty points and discounts for regular customers. Ask at the front desk to enroll in our program.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-white border-secondary">
          <h2 className="accordion-header" id="headingServices">
            <button
              className="accordion-button collapsed bg-dark text-warning fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseServices"
              aria-expanded="false"
              aria-controls="collapseServices"
            >
              Services
            </button>
          </h2>
          <div id="collapseServices" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              We provide a wide range of services including classic haircuts, beard grooming, hair coloring, and premium packages.
              You can also customize your service during the appointment.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-white border-secondary">
          <h2 className="accordion-header" id="headingPricing">
            <button
              className="accordion-button collapsed bg-dark text-warning fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePricing"
              aria-expanded="false"
              aria-controls="collapsePricing"
            >
              Pricing
            </button>
          </h2>
          <div id="collapsePricing" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Pricing varies by service. Our classic haircuts start at ₹200, beard services at ₹150, and premium packages at ₹700. 
              Visit our pricing section for full details.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-white border-secondary">
          <h2 className="accordion-header" id="headingSupport">
            <button
              className="accordion-button collapsed bg-dark text-warning fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSupport"
              aria-expanded="false"
              aria-controls="collapseSupport"
            >
              Support
            </button>
          </h2>
          <div id="collapseSupport" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can reschedule or cancel your appointment up to 24 hours in advance. For urgent queries, please call or WhatsApp us directly.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h5 className="text-warning">Still have questions?</h5>
        <p>Can't find the answer you're looking for? Please contact us directly for more information.</p>
        <a href="/contact" className="btn btn-warning text-dark fw-semibold">Contact Us</a>
      </div>
    </div>
  );
};

export default FAQSection;
