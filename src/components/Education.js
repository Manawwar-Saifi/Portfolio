import React from "react";

const Education = () => {
  return (
    <div className="homepage-education-section" id="homeEducation">
      <h3>My Education</h3>
      <div className="container">
        <div className="row-div">
          <div className="col-div">
            <div className="inner-section">
              <ul>
                <li data-aos="flip-up" data-aos-duration="1000">
                  <h5>
                    <strong>Bachelor of Computer Application</strong>
                    <span>2024 | Sonipat, Haryana</span>
                  </h5>
                  <p>
                    <span>
                      Deenbandhu Chhotu Ram University of Science and Technology
                    </span>
                    <strong>7.5</strong>
                  </p>
                </li>
                <li data-aos="flip-up" data-aos-duration="1300">
                  <h5>
                    <strong>Bachelor of Arts</strong>
                    <span> 2020 | Sonipat, Haryana </span>
                  </h5>
                  <p>
                    <span>Maharshi Dayanand University</span>
                    <strong>5.5</strong>
                  </p>
                </li>
                <li data-aos="flip-up" data-aos-duration="1600">
                  <h5>
                    <strong>Senior Secondary Schooling</strong>
                    <span> 2017 | Sonipat Haryana</span>
                  </h5>
                  <p>
                    <span>Mam Chand Public School CBSE</span>
                    <strong>7.2</strong>
                  </p>
                </li>
                {/* <li>
                  <h5>
                    <strong>Bachelor of Computer Application</strong>
                    <span>2024 | Sonipat, Haryana</span>
                  </h5>
                  <p>
                    <span>
                      Deenbandhu Chhotu Ram University of Science and Technology
                    </span>
                    <strong>7.5</strong>
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
