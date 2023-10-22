// vercel/functions/restaurant-proxy.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    res.json(restaurantData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Unable to fetch data from the third-party API" });
  }
};
