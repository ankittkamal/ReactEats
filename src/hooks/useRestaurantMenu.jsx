import { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU } from "../utils/Constants";

function useRestaurantMenu(resId) {
  const [resIdInfo, setResIdInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(GET_RESTAURANT_MENU + resId);
    const json = await data.json();
    // console.log(json);
    setResIdInfo(json?.data);
  };
  return resIdInfo;
}

export default useRestaurantMenu;
