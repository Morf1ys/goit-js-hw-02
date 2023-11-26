"use strict";

function getShippingCost(country) {
  let price;
  let sms;
  switch (country.toLowerCase()) {
    case "china":
      price = 100;
      sms = `Shipping to China will cost ${price} credits`;
      break;
    case "australia":
      price = 170;
      sms = `Shipping to Australia will cost ${price} credits`;
      break;
    case "chile":
      price = 250;
      sms = `Shipping to Chile will cost ${price} credits`;
      break;
    case "jamaica":
      price = 120;
      sms = `Shipping to Jamaica will cost ${price} credits`;
      break;
    default:
      sms = "Sorry, there is no delivery to your country";
      break;
  }
  return sms;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
