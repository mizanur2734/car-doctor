import React from "react";

export default function Banner() {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full mt-12">
        {banners.map((banners, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover rounded-xl"
          >
            <div className="h-full w-full flex items-center pl-36 text-white">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banners.title}</h1>
                <p>{banners.description}</p>
               <div className="space-x-6">
                 <button className="btn bg-red-500">Latest Project</button>
                <button className="btn hover:bg-red-500 btn-outline">Discover More</button>
               </div>
              </div>
            </div>
            <div className="absolute flex transform bottom-12 right-12 ">
              <a href={banners.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banners.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];
