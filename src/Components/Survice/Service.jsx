/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({ brithdays }) => {
  const { name,card_img,id,title,price } = brithdays;
  return (
    <div>
      <div className=" items-center">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="w-[370px] h-[250px] "
                src={card_img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name} </h2>
            <div>
            <p className="">{title} </p>
            </div>
              <div className="card-actions flex justify-between ">
                <h2 className="font-bold"> price : {price} </h2>
              <Link to={`/brithdays/${id}`}> <button className=" p-2 px-2 rounded badge-secondary">View Details</button> </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Service;
