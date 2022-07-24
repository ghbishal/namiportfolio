import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>
          </ul>
        </article>

        {/* End OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>
          </ul>
        </article>

        {/* End OF WebDevelopment */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum lorem lorem lorem</p>
            </li>
          </ul>
        </article>

        {/* End OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
