import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hang out with friends built with ReactJS, Material-UI, and Firebase.",
      github: "https://github.com/example/chatify",
      demo: "https://example.com/chatify-demo",
      image: "https://via.placeholder.com/300x200?text=Chatify",
    },
    {
      name: "Bits-of-Code",
      description:
        "Personal blog built with NextJS and Tailwind CSS. Features markdown rendering, dark mode, and easy-to-write blogs.",
      github: "https://github.com/example/bits-of-code",
      demo: "https://example.com/bits-of-code-demo",
      image: "https://via.placeholder.com/300x200?text=Bits-of-Code",
    },
    {
      name: "Editorio",
      description:
        "Online code and markdown editor built with ReactJS. Features auto-save, instant preview, and custom HTML tag support.",
      github: "https://github.com/example/editorio",
      demo: "https://example.com/editorio-demo",
      image: "https://via.placeholder.com/300x200?text=Editorio",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    message: "",
    rating: 0,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  // Add or update testimonial
  const handleSave = () => {
    const { name, message, rating } = newTestimonial;

    if (!name.trim() || !message.trim() || rating <= 0) {
      setError("All fields are required, and rating must be greater than 0.");
      return;
    }

    setError("");

    if (editIndex !== null) {
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editIndex] = newTestimonial;
      setTestimonials(updatedTestimonials);
      setEditIndex(null);
    } else {
      setTestimonials([...testimonials, newTestimonial]);
    }

    setNewTestimonial({ name: "", message: "", rating: 0 });
  };

  // Edit testimonial
  const handleEdit = (index) => {
    setNewTestimonial(testimonials[index]);
    setEditIndex(index);
  };

  // Delete testimonial
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="portfolio-container bg-dark text-light py-5">
      <div className="container">
        {/* Projects Section */}
        <h1 className="text-center display-4 mb-5">
          My Recent <span className="text-highlight">Projects</span>
        </h1>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card project-card text-center">
                <img
                  src={project.image}
                  alt={`${project.name} Preview`}
                  className="card-img-top project-image"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm">
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <h1 className="text-center display-4 my-5">
          Client <span className="text-highlight">Testimonials</span>
        </h1>
        <div className="mb-4">
          <div className="card bg-secondary text-light p-3">
            <h5 className="mb-3">
              {editIndex !== null ? "Edit Testimonial" : "Add Testimonial"}
            </h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Client Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter client name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={newTestimonial.message}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter testimonial message"
                rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating (1-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={newTestimonial.rating}
                onChange={handleInputChange}
                className="form-control"
                min="1"
                max="5"
                placeholder="Enter rating"
              />
            </div>
            <button className="btn btn-success" onClick={handleSave}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <div className="row g-3">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card testimonial-card text-light">
                <div className="card-body">
                  <h5 className="card-title text-highlight">
                    {testimonial.name}
                  </h5>
                  <p className="card-text">{testimonial.message}</p>
                  <p className="card-text">Rating: {testimonial.rating} / 5</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Testimonials Message */}
        {testimonials.length === 0 && (
          <p className="text-center text-muted mt-4">
            No testimonials available. Add one to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
