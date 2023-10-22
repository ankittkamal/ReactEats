import { CDN_URL } from "../utils/Constants";
import { AiFillStar } from "react-icons/ai";

function RestaurantCard({ resData }) {
  // destructuring
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    slaString,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow hover:bg-slate-100 ">
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

        <div className="mt-2 text-gray-details  items-center flex justify-between">
          <div className="flex mt-2 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
            <span className="flex items-center gap-1 ">
              <AiFillStar /> {avgRating}
            </span>
          </div>
          <span className="text-xs font-semibold">{slaString}</span>
          <span className="mx-4 text-sm font-semibold">
            ₹ {costForTwo / 100}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
