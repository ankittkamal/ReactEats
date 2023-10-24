import clsx from "clsx";
import { CDN_URL } from "../utils/Constants";
import { AiFillStar } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

function RestaurantCard({ resData }) {
  // destructuring
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div className=" p-2 m-1 rounded-xl overflow-hidden transform transition-transform hover:scale-95  ">
      {/**image */}
      <div className="relative ">
        <img
          className="w-full h-full object-cover rounded-xl  "
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="absolute bottom-0  w-full h-8 bg-gradient-to-t from-black to-transparent rounded-xl"></div>
        <div className="absolute bottom-0 left-2  flex items-center justify-center text-white text-xl font-bold z-10 bg-opacity-85 mb-1">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      {/**name */}
      <h6 className="text-base font-semibold text-slate-900 tracking-normal mt-1">
        {name}
      </h6>
      {/**rating */} {/* time */}
      <div className=" flex  items-center justify-start gap-2">
        <span className="flex items-center gap-1 ">
          <AiFillStar
            className={clsx(
              " rounded-2xl text-lg text-white p-0.5",
              {
                "bg-green-700": avgRating >= 4,
              },
              { "bg-orange-400": avgRating < 4 }
            )}
          />{" "}
          <p className="font-medium">{avgRating}</p>
        </span>
        <span className="text-base  flex flex-row items-center text-center overflow-hidden">
          <p className=""> • </p>{" "}
          <p className="font-medium">{sla?.slaString}</p>
        </span>
      </div>
      {/* cuisines */}
      <p className=" text-base text-gray-900 font-extralight truncate overflow-hidden w-full    mt-1">
        {cuisines.join(", ")}
      </p>
      {/* location */}
      <p className="text-base text-gray-900 font-light">{areaName}</p>
    </div>
  );
}

{
  /**<span className="mt-1 mx-1 text-sm font-normal flex items-center">
          {costForTwo}
        </span> */
}

export default RestaurantCard;
