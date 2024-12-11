import React from "react";
import MyWorkBtn from "./MyWorkBtn";

function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid w-75 shadow mt-5" src="/assets/images/about-img.jpg" alt="Img About" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center text-md-start">
            <h2 className="mb-5">About me</h2>
            <p className="text-start">
              I am a passionate front-end developer with a knack for creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver high-quality web solutions that meet the needs of my clients.
            </p>
            <p className="text-start mb-5">
              Over the years, I have worked on various projects ranging from small business websites to large-scale web applications. My goal is to continuously improve my skills and stay updated with the latest industry trends to provide the best possible service.
            </p>
            <MyWorkBtn />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-4">My Hobbies</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src="https://imgs.search.brave.com/aa1cw9A4L_Vf6lzeV4OVHeeTwzndC9yaLxf-JbTOEsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb2lubm92YS5l/ZHUuZXMvaW1nL3N1/YmlkYXNFZGl0b3Iv/YW1jMGUtZHJ3cHUt/MTY0MzIyMzI3OC53/ZWJw" className="card-img-top" alt="Photography" />
                  <div className="card-body">
                    <h5 className="card-title">Photography</h5>
                    <p className="card-text">I love capturing moments and landscapes through my lens.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src="https://imgs.search.brave.com/dOq6zciLjhAlMLBrY4WnDcxS6eTbKhFsWwE1jz1rAkw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmJ1c2NvdW5j/aG9sbG8uY29tL2lt/Zy9kZXN0aW5hdGlv/bi8zMDUvcHVudGEt/Y2FuYS0wMS5qcGc_/dg" className="card-img-top" alt="Traveling" />
                  <div className="card-body">
                    <h5 className="card-title">Traveling</h5>
                    <p className="card-text">Exploring new places and cultures is my passion.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src="https://imgs.search.brave.com/aYtBY7MWaNcmdoHKuZutxLf2nbkyA0M2WlloV2HMhCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzgwYzUx/NC9mYWppdGFzX2hv/cm5vLzQ1MF8xMDAw/LmpwZw" className="card-img-top" alt="Cooking" />
                  <div className="card-body">
                    <h5 className="card-title">Cooking</h5>
                    <p className="card-text">I enjoy experimenting with new recipes and flavors in the kitchen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
