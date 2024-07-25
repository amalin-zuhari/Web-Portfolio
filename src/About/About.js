import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div class="container1 mt-5" id="about">
        <div class="row mt-5">
          <div class="col-md-6">
            <h1 class="about">
              Hi, I'm <span class="habout">Amalin Zuhari</span>
            </h1>
            <br />
            <div class="aboutfsd text-center">
              <h1 class="typing-animation">FUTURE FULL STACK DEVELOPER</h1>
            </div>
            <p class="about text-justify">
              My life principle is to always do my best in everything I do: keep
              learning, stay honest, and try to make a positive difference in
              people's lives through hard work and kindness.
            </p>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <img src="Mel.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
