import React from "react";

export default function ServicesCard({service}) {
    const {title, img, price} = service || {}
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
        height={120}
        width={430}
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between items-center">
            <h6>Price : ${price}</h6>
          <button className="btn bg-red-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
