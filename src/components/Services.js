import React from "react";
import Title from "./Title";
import { services } from "../data.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article className="service" key={service.id}>
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className={service.title}>saving money</h4>
                <p className={service.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
