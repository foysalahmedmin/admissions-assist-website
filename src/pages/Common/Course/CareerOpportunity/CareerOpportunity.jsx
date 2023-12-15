/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React from "react";

const CareerOpportunity = ({ career_opportunity }) => {
  return (
    <section className="pt-7 pb-14 lg:pb-24" id="career_opportunity">
      <div className="container mx-auto">
        <h2 className="title text-3xl mb-7">Career Opportunity</h2>
        <p>{career_opportunity}</p>
      </div>
    </section>
  );
};

export default CareerOpportunity;
