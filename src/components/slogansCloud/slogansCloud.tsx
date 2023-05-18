import { useEffect } from "react";
import TagCloud from "TagCloud";

const getRadius = () => {
   if (typeof window === 'undefined') {
    return 150; // Domyślna wartość, gdy obiekt window nie istnieje
  }
  const width = window.innerWidth;
  if (width < 768) {
    return 150;
  } else if (width < 1024) {
    return 250;
  } else if (width < 1280) {
    return 300;
  } else if (width < 1440) {
    return 350;
  } else {
    return 350;
  }
};

const container = ".slogansContainer";
// const texts = [
//   "Recycling",
//   "Zero waste",
//   "Ecology",
//   "Recycling points",
//   "Eco-friendly stores",
//   "Environmental protection",
//   "Ecological map",
//   "Living sustainably",
//   "Sustainable development",
//   "Environmentally friendly",
//   "Green initiatives",
//   "Waste reduction",
//   "Renewable energy",
//   "Electric vehicles",
//   "Charging stations",
//   "Organic products",
// ];
const texts = [
  " Live green, love green, think green",
" Reduce, reuse, recycle - the three Rs of eco-friendliness",
" Be the change you want to see in the world - go green",
" Every day is Earth Day - make it count",
 "Green is the new black - embrace eco-friendly fashion",
 "Save energy, save money, save the planet",
 "Don't be mean, be green - treat nature with respect",
" Eco-friendly is not a trend, it's a lifestyle",
 "The future is green - join the movement",
 "There is no planet B - act now for a sustainable future",
]
const options = {
  radius: getRadius(),
  maxSpeed: "normal",
  initSpeed: "slow",
  direction: 135,
  keep: true,
};

export const SlogansCloud = () => {
  useEffect(() => {
    //@ts-ignore
    TagCloud(container, texts, options);
  },[]);

  return (
    <div className="w-screen md:w-full text-lg h-fit  text-white font-semibold  overflow-hidden flex flex-col items-center justify-center">
      <div className="slogansContainer"></div>
    </div>
  );
};
