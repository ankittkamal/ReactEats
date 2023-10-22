import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const [searchText, setSearchText] = useState();

  return (
    <>
      <div className="flex justify-start mob:flex-col ">
        {/* <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto">
          <input
            type="text"
            placeholder=" Search for restaurant"
            value={searchText}
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray"
            key="input-text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs"
            onClick={searchData(searchText, allRestaurants)}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="flex justify-end h-[100px] items-center m-auto mob:h-[50px]">
          <button
            className={
              isFavourite
                ? "btn btn--primary px-[5px] mob:basis-[50px] mob:text-xs"
                : "btn btn--secondary px-[5px] mob:basis-[50px] mob:text-xs"
            }
            onClick={() => {
              showFavouriteRestaurants();
            }}
          >
            Top Resturant{" "}
          </button>
        </div> */}
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
}

export default Body;
