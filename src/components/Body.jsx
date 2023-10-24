import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { GET_RESTAURANTS_LIST, SWIGGY_RESTAURSNT } from "../utils/Constants";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //mock data  resList

  // fetching Swiggy restaurant data
  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANTS_LIST);
    const json = await data.json();
    // console.log(json);
    // console.log(restaurantData);

    const restaurantData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(restaurantData);
    setFilteredRestaurants(restaurantData);
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
            className="  bg-blue-500  text-white rounded-xl p-1 w-24 flex items-center justify-between "
            // onClick={searchData(searchText, allRestaurants)}
            onClick={handleSearch}
          >
            <BiSearchAlt2 />
            <p className="mx-1">Search</p>
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

      <div className="grid grid-cols-4 gap-2 p-4 w-5/6 mb-4 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
