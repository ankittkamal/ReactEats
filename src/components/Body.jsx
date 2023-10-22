import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // fetching Swiggy restaurant data
  const fetchData = async () => {
    try {
      const response = await fetch("/api/restaurant-proxy'"); // Make the request to your proxy API route

      if (response.ok) {
        const restaurantData = await response.json();

        setListOfResturant(restaurantData);
        setFilteredRestaurants(restaurantData);
      } else {
        // Handle errors, such as if the response is not OK
        console.error("Failed to fetch restaurant data");
      }
    } catch (error) {
      // Handle other errors, such as network issues
      console.error("An error occurred while fetching restaurant data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search
  const handleSearch = () => {
    const filteredRestaurant = listOfResturant?.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-start mob:flex-col gap-80 ">
        <div className="flex justify-evenly min-w-[300px] mob:min-w-[175px] h-[100px] mob:h-[50px] items-center m-auto gap-2">
          <input
            type="text"
            placeholder=" Search for restaurant"
            value={searchText}
            className="outline-none text-base mob:text-xs p-[5px] basis-[250px] mob:basis-[90px] h-[30px] rounded-md ring-1 ring-gray bg-gray-100"
            key="input-text"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className=" basis-[40px] mob:basis-[20px] mob:text-xs bg-blue-500 text-white rounded-xl p-1 m-1 w-28 "
            // onClick={searchData(searchText, allRestaurants)}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex justify-end h-[100px] items-center m-auto mob:h-[50px]">
          <button
            className="rounded-md ring-1 ring-gray bg-gray px-[5px] mob:basis-[50px] mob:text-xs p-1 hover:bg-slate-500"
            onClick={() => {
              const filteredList = listOfResturant.filter(
                (res) => res.info.avgRating > 4.2
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Top Restaurant{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
}

export default Body;
