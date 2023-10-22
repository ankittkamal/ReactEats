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
  } = resData?.info;

  return (
    <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow hover:bg-blue-50 bg-slate-50 ">
      <div className="relative w-full ">
        <img
          className="w-full mob:w-[130px]"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="">
        <h6 className="text-base font-bold  tracking-normal mt-1">{name}</h6>
        <p className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px] mt-1">
          {cuisines.join(", ")}
        </p>

        <div className="mt-2 text-gray-details items-center flex justify-between">
          <div className="flex mt-2 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
            <span className="flex items-center gap-1 ">
              <AiFillStar /> {avgRating}
            </span>
          </div>

          <span className="mx-2 text-sm font-normal flex items-center">
            {costForTwo}
          </span>
        </div>
        <div className="mt-2 text-gray-details items-center flex justify-between">
          <span className="text-sm flex items-center">
            <p className=" text-sm ">
              <FaLocationDot />
            </p>
            <p className="mx-0.5">{areaName}</p>
          </span>
          <span className=" text-sm  flex items-center mx-2">
            <p className="font-bold text-lg mx-1">
              <BiTimer />
            </p>

            {sla?.slaString}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
