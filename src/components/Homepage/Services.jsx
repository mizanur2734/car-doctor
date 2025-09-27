import React from "react";
import {services} from "../../lib/services"
import ServicesCard from "../cards/ServicesCard";

export default function Services() {
  console.log(services)
  return (
    <div className="text-slate-800 mt-12">
      <div className="text-center container mx-auto">
        <h3 className="text-xl text-orange-600">Services</h3>
        <h2 className="text-2xl font-bold text-orange-600">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, <br /> by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {
        services.map((service) =>{
          return <ServicesCard service={service} key={service._id}></ServicesCard>
        })
      }
      </div>
    </div>
  ); 
}
