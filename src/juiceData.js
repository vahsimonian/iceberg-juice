import redDelight from "../src/assets/Red Delight.png";
import applePearMedley from "../src/assets/Apple Pear Medley.png";
import autumnHarves from "../src/assets/Autumn Harves.png";
import autumnHarvestDelight from "../src/assets/Autumn Harvest.png";
import beetFusion from "../src/assets/Beet Fusion.png";
import berryPurple from "../src/assets/Berry Purple.png";
import citrusSurge from "../src/assets/Citrus Surge.png";
import coolingBreeze from "../src/assets/Cooling Breeze.png";
import cranAppleSplash from "../src/assets/Cran-Apple Splash.png";
import currantBlueFusion from "../src/assets/Currant Blue Fusion.png";
import dragonWatermelonBurst from "../src/assets/Dragon Watermelon Burst.png";
import greenDetox from "../src/assets/Green Detox.png";
import greenPower from "../src/assets/Green Power.png";
import greenRefresh from "../src/assets/Green Refresh.png";
import greenZest from "../src/assets/Green Zest.png";
import lemonPearFusion from "../src/assets/Lemon Pear Fusion.png";
import melonDragonFusion from "../src/assets/Melon Dragon Fusion.png";
import mintyFreshness from "../src/assets/Minty Freshness.png";
import orangeBoost from "../src/assets/Orange Boost.png";
import pinkParadise from "../src/assets/Pink Paradise.png";
import purplePotion from "../src/assets/Purple Potion.png";
import purpleSweetness from "../src/assets/Purple Sweetness.png";
import rubyRed from "../src/assets/Ruby Red.png";
import savoryRed from "../src/assets/Savory Red.png";
import sunriseBlend from "../src/assets/Sunrise Blend.png";
import sunsetGlow from "../src/assets/Sunset Glow.png";
import tropicalSmooth from "../src/assets/Tropical Smooth.png";
import tropicalSmoothie from "../src/assets/Tropical Smoothie.png";
import tropicalSunrise from "../src/assets/Tropical Sunrise.png";
import zestyLemonade from "../src/assets/Zesty Lemonade.png";
// import all from "../src/assets/all.png";

export const juiceData = [
  {
    id: 1,
    name: "Berry Apple Twist",
    color: "Red",
    title: "Red Delight",
    fruits: ["Apple", "Strawberry"],
    description: "A sweet blend of apples and strawberries.",
    price: "$3.99",
    available: true,
    img: redDelight,
  },
  {
    id: 2,
    name: "Kiwi Lime Fusion",
    color: "Green",
    title: "Green Zest",
    fruits: ["Kiwi", "Lime"],
    description: "Tart and refreshing with kiwi and a hint of lime.",
    price: "$4.50",
    available: true,
    img: greenZest,
  },
  {
    id: 3,
    name: "Mango Pineapple Breeze",
    color: "Yellow",
    title: "Tropical Sunrise",
    fruits: ["Pineapple", "Mango"],
    description: "A tropical blend of ripe pineapple and mango.",
    price: "$4.25",
    available: true,
    img: tropicalSunrise,
  },
  {
    id: 4,
    name: "Grape Berry Mix",
    color: "Purple",
    title: "Purple Potion",
    fruits: ["Blueberry", "Grape"],
    description: "Rich in antioxidants with blueberries and grapes.",
    price: "$5.00",
    available: true,
    img: purplePotion,
  },
  {
    id: 5,
    name: "Carrot Citrus Splash",
    color: "Orange",
    title: "Orange Boost",
    fruits: ["Orange", "Carrot"],
    description: "Vitamin-rich blend of orange and carrot.",
    price: "$3.75",
    available: true,
    img: orangeBoost,
  },
  {
    id: 6,
    name: "Strawberry Guava Blend",
    color: "Pink",
    title: "Pink Paradise",
    fruits: ["Guava", "Strawberry"],
    description: "A refreshing mix of guava and strawberries.",
    price: "$4.00",
    available: true,
    img: pinkParadise,
  },
  {
    id: 7,
    name: "Peach Sunrise",
    color: "Orange",
    title: "Sunset Glow",
    fruits: ["Peach", "Orange"],
    description: "A sweet and tangy blend of peach and orange.",
    price: "$3.99",
    available: true,
    img: sunsetGlow,
  },
  {
    id: 8,
    name: "Cucumber Apple Splash",
    color: "Green",
    title: "Green Refresh",
    fruits: ["Green Apple", "Cucumber"],
    description: "A cool and crisp apple-cucumber mix.",
    price: "$4.20",
    available: true,
    img: greenRefresh,
  },
  {
    id: 9,
    name: "Ginger Lemon Twist",
    color: "peachpuff",
    title: "Zesty Lemonade",
    fruits: ["Lemon", "Ginger"],
    description: "A zingy lemon and ginger blend.",
    price: "$3.80",
    available: true,
    img: zestyLemonade,
  },
  {
    id: 10,
    name: "Pomegranate Cherry Fusion",
    color: "crimson",
    title: "Ruby Red",
    fruits: ["Cherry", "Pomegranate"],
    description: "A rich blend of cherry and pomegranate.",
    price: "$4.50",
    available: true,
    img: rubyRed,
  },

  {
    id: 11,
    name: "Watermelon Dragon Delight",
    color: "palevioletred",
    title: "Dragon Watermelon",
    fruits: ["Watermelon", "Dragonfruit"],
    description: "Exotic dragonfruit blended with sweet watermelon.",
    price: "$4.75",
    available: true,
    img: dragonWatermelonBurst,
  },
  {
    id: 12,
    name: "Cucumber Mint Cooler",
    color: "Green",
    title: "Minty Freshness",
    fruits: ["Mint", "Cucumber"],
    description: "Cool and refreshing mint with a touch of cucumber.",
    price: "$3.50",
    available: true,
    img: mintyFreshness,
  },
  {
    id: 13,
    name: "Beet Berry Blend",
    color: "crimson",
    title: "Raspberry Beet Fusion",
    fruits: ["Raspberry", "Beet"],
    description: "A mix of tart raspberry and earthy beet.",
    price: "$4.00",
    available: true,
    img: beetFusion,
  },
  {
    id: 14,
    name: "Banana Pineapple Smoothie",
    color: "khaki",
    title: "Tropical Yellow",
    fruits: ["Banana", "Pineapple"],
    description: "Sweet blend of banana and pineapple for a tropical taste.",
    price: "$3.95",
    available: true,
    img: tropicalSmooth,
  },
  {
    id: 15,
    name: "Currant Blue Fusion",
    color: "darkmagenta",
    title: "Berry Purple",
    fruits: ["Blackcurrant", "Blueberry"],
    description: "Rich and deep flavors of blackcurrant and blueberry.",
    price: "$4.50",
    available: true,
    img: berryPurple,
  },
  {
    id: 16,
    name: "Pumpkin Carrot Delight",
    color: "orangered",
    title: "Autumn Harvest",
    fruits: ["Pumpkin", "Carrot"],
    description: "A hearty blend of pumpkin and carrot, perfect for fall.",
    price: "$4.25",
    available: true,
    img: autumnHarvestDelight,
  },
  {
    id: 17,
    name: "Kale Apple Cleanse",
    color: "darkgreen",
    title: "Green Detox",
    fruits: ["Kale", "Green Apple"],
    description: "Healthy kale mixed with sweet green apple.",
    price: "$4.75",
    available: true,
    img: greenDetox,
  },
  {
    id: 18,
    name: "Tomato Pepper Zing",
    color: "Red",
    title: "Savory Red",
    fruits: ["Tomato", "Red Pepper"],
    description: "Unique blend of tomato and red pepper for a savory twist.",
    price: "$3.80",
    available: true,
    img: savoryRed,
  },
  {
    id: 19,
    name: "Lemon Pear Fusion",
    color: "peachpuff",
    title: "Pear Lemon Delicacy",
    fruits: ["Lemon", "Pear"],
    description: "A subtle mix of pear with a hint of lemon.",
    price: "$4.00",
    available: true,
    img: lemonPearFusion,
  },
  {
    id: 20,
    name: "Grape Plum Mix",
    color: "Purple",
    title: "Purple Sweetness",
    fruits: ["Grape", "Plum"],
    description: "Sweet and rich blend of grapes and plums.",
    price: "$4.50",
    available: true,
    img: purpleSweetness,
  },
  {
    id: 21,
    name: "Avocado Spinach Boost",
    color: "Green",
    title: "Green Power",
    fruits: ["Avocado", "Spinach"],
    description: "Nutrient-packed blend of avocado and spinach.",
    price: "$5.00",
    available: true,
    img: greenPower,
  },
  {
    id: 22,
    name: "Mango Carrot Smoothie",
    color: "Orange",
    title: "Sunrise Blend",
    fruits: ["Mango", "Carrot"],
    description: "A vibrant mix of mango and carrot.",
    price: "$4.20",
    available: true,
    img: sunriseBlend,
  },

  {
    id: 23,
    name: "Apple Pear Medley",
    color: "greenyellow",
    title: "Orchard Fresh",
    fruits: ["Green Apple", "Pear"],
    description: "Crisp and refreshing blend of green apple and pear.",
    price: "$3.95",
    available: true,
    img: applePearMedley,
  },
  {
    id: 24,
    name: "Cranberry Apple Fusion",
    color: "tomato",
    title: "Cran-Apple Splash",
    fruits: ["Cranberry", "Apple"],
    description: "Tart cranberry meets sweet apple in this vibrant blend.",
    price: "$4.25",
    available: true,
    img: cranAppleSplash,
  },
  {
    id: 25,
    name: "Currant Berry Delight",
    color: "blueviolet",
    title: "Berry Deep",
    fruits: ["Blackcurrant", "Blueberry"],
    description: "A deep, rich blend of blackcurrant and blueberry.",
    price: "$4.75",
    available: true,
    img: currantBlueFusion,
  },
  {
    id: 26,
    name: "Pumpkin Carrot Craze",
    color: "Orange",
    title: "Autumn Harvest",
    fruits: ["Carrot", "Pumpkin"],
    description: "A unique blend of carrot and pumpkin for a fall flavor.",
    price: "$3.85",
    available: true,
    img: autumnHarves,
  },
  {
    id: 27,
    name: "Melon Dragon Fusion",
    color: "Pink",
    title: "Dragon Melon Twist",
    fruits: ["Watermelon", "Dragonfruit"],
    description: "Exotic dragonfruit mixed with sweet watermelon.",
    price: "$5.00",
    available: true,
    img: melonDragonFusion,
  },
  {
    id: 28,
    name: "Minted Cucumber Splash",
    color: "lightgreen",
    title: "Cooling Breeze",
    fruits: ["Cucumber", "Mint"],
    description: "A refreshing and cooling blend of cucumber and mint.",
    price: "$3.50",
    available: true,
    img: coolingBreeze,
  },
  {
    id: 29,
    name: "Grapefruit Orange Zest",
    color: "lightcoral",
    title: "Citrus Surge",
    fruits: ["Blood Orange", "Grapefruit"],
    description: "A tangy and invigorating mix of blood orange and grapefruit.",
    price: "$4.50",
    available: true,
    img: citrusSurge,
  },
  {
    id: 30,
    name: "Banana Pineapple Swirl",
    color: "Yellow",
    title: "Tropical Smoothie",
    fruits: ["Pineapple", "Banana"],
    description: "A creamy blend of pineapple and banana for a tropical treat.",
    price: "$4.00",
    available: true,
    img: tropicalSmoothie,
  },
];
