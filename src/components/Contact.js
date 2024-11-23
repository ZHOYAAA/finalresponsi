import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name === "",
      email: formData.email === "",
      message: formData.message === "",
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the required fields.",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "Close",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5 p-4 shadow-lg rounded bg-dark">
      <h1 className="text-center text-success mb-4 display-4">Contact Me</h1>
      <p className="text-center text-muted mb-4">
        Have a question or want to work together? Fill out the form below, and
        I'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Your Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.name ? "is-invalid" : formData.name ? "is-valid" : ""
            }`}
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <div className="invalid-feedback">Name is required.</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Your Email
          </label>
          <input
            type="email"
            className={`form-control ${
              errors.email ? "is-invalid" : formData.email ? "is-valid" : ""
            }`}
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">A valid email is required.</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">
            Your Message
          </label>
          <textarea
            className={`form-control ${
              errors.message ? "is-invalid" : formData.message ? "is-valid" : ""
            }`}
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
          {errors.message && (
            <div className="invalid-feedback">Message is required.</div>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success btn-lg w-100"
            style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
