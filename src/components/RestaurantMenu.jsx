import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, GET_RESTAURANT_MENU } from "../utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    cloudinaryImageId,
    areaName,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const cardCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(cardCategories);

  return (
    <div>
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <p> {sla?.slaString}</p>
      <p>{areaName} </p>
      <p>{costForTwoMessage}</p>
      <p>menu</p>
    </div>
  );
}

export default RestaurantMenu;
