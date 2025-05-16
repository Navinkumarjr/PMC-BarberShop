import React from "react";
import { useState } from "react";
const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Submitted:', formData);
    alert('Appointment submitted successfully!');
    // Add backend integration or email sending logic here
  };

  return (
    <div className="container py-5 text-white mt-5 BookanAppointment"style={{ backgroundColor: '#121212' }}>
      <h2 className="text-center text-warning fw-bold mb-4" id="book">Book an Appointment</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="p-4 rounded" style={{ backgroundColor: '#1e1e1e' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-warning">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-warning">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-warning">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="service" className="form-label text-warning">Select Service</label>
              <select
                id="service"
                className="form-select bg-dark text-white border-secondary"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose a service</option>
                <option>Classic Haircut</option>
                <option>Beard Services</option>
                <option>Hair Coloring</option>
                <option>Premium Package</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label text-warning">Preferred Date</label>
              <input
                type="date"
                id="date"
                className="form-control bg-dark text-white border-secondary"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="time" className="form-label text-warning">Preferred Time</label>
              <input
                type="time"
                id="time"
                className="form-control bg-dark text-white border-secondary"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-warning text-dark fw-semibold">Submit Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentForm;
