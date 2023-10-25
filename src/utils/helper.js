// extracting price from costForTwo string example-> "₹400 for two" will get 400
export function extractPriceFromString(inputString) {
  // Remove non-numeric characters using a regular expression
  const priceString = inputString.replace(/[^0-9]/g, "");

  const price = parseInt(priceString, 10); // Convert the priceString to an integer
  return price;
}

//
