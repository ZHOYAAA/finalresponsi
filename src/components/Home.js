import React from "react";
import "./Home.css";

const Home = () => {
  const handleDownloadClick = () => {
    // Buka link Google Drive di tab baru
    window.open(
      "https://drive.google.com/file/d/1EzSBw3ikQ8uG091wFkHqBtQZyNCyisht/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        {/* Bagian Kiri: Teks */}
        <div className="text-container">
          <h1 className="main-heading">
            HELLO EVERYONE!{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          <h2 className="sub-heading">
            I'M <span className="highlight">ZHOYAAA</span>
          </h2>
          <p className="typing-animation">
            | STUDENT | Full Stack Developer
          </p>
          <div className="button-wrapper">
            <button
              onClick={handleDownloadClick}
              className="btn btn-success btn-lg">
              Download CV
            </button>
          </div>
        </div>

        {/* Bagian Kanan: Ilustrasi */}
        <div className="image-container">
          <img
            src="https://www.mooglelabs.com/frontend/assests/images/ai-consulting/ai-consulting-banner.svg" // Ganti dengan URL gambar ilustrasi Anda
            alt="Coding Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
