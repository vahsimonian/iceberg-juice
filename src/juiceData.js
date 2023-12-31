import redDelight from "../src/assets/juices/Red Delight.png";
import applePearMedley from "../src/assets/juices/Apple Pear Medley.png";
import autumnHarves from "../src/assets/juices/Autumn Harves.png";
import autumnHarvestDelight from "../src/assets/juices/Autumn Harvest.png";
import beetFusion from "../src/assets/juices/Beet Fusion.png";
import berryPurple from "../src/assets/juices/Berry Purple.png";
import citrusSurge from "../src/assets/juices/Citrus Surge.png";
import coolingBreeze from "../src/assets/juices/Cooling Breeze.png";
import cranAppleSplash from "../src/assets/juices/Cran-Apple Splash.png";
import currantBlueFusion from "../src/assets/juices/Currant Blue Fusion.png";
import dragonWatermelonBurst from "../src/assets/juices/Dragon Watermelon Burst.png";
import greenDetox from "../src/assets/juices/Green Detox.png";
import greenPower from "../src/assets/juices/Green Power.png";
import greenRefresh from "../src/assets/juices/Green Refresh.png";
import greenZest from "../src/assets/juices/Green Zest.png";
import lemonPearFusion from "../src/assets/juices/Lemon Pear Fusion.png";
import melonDragonFusion from "../src/assets/juices/Melon Dragon Fusion.png";
import mintyFreshness from "../src/assets/juices/Minty Freshness.png";
import orangeBoost from "../src/assets/juices/Orange Boost.png";
import pinkParadise from "../src/assets/juices/Pink Paradise.png";
import purplePotion from "../src/assets/juices/Purple Potion.png";
import purpleSweetness from "../src/assets/juices/Purple Sweetness.png";
import rubyRed from "../src/assets/juices/Ruby Red.png";
import savoryRed from "../src/assets/juices/Savory Red.png";
import sunriseBlend from "../src/assets/juices/Sunrise Blend.png";
import sunsetGlow from "../src/assets/juices/Sunset Glow.png";
import tropicalSmooth from "../src/assets/juices/Tropical Smooth.png";
import tropicalSmoothie from "../src/assets/juices/Tropical Smoothie.png";
import tropicalSunrise from "../src/assets/juices/Tropical Sunrise.png";
import zestyLemonade from "../src/assets/juices/Zesty Lemonade.png";
// import all from "../src/assets/all.png";
import imageOne from "../src/assets/fruits/1.png";
import imageTwo from "../src/assets/fruits/2.png";
import imageThree from "../src/assets/fruits/3.png";
import imageFour from "../src/assets/fruits/4.png";

export const fourJuicesCircled = [imageOne, imageTwo, imageThree, imageFour];

export const navbarItems = [
  {
    id: 1,
    name: "Home",
    to: "home",
  },
  {
    id: 2,
    name: "About",
    to: "about",
    listItems: ["Business", "History", "Mission", "Team"],
    sections: {
      business: {
        title: "Our Business",
        content:
          "Our Business at Iceberg Kampot is dedicated to bringing health and happiness to our customers' lives. Founded on the principles of sustainability, freshness, and taste, we've been delivering premium quality natural juices since 2023. Our mission is to use the finest organic ingredients to create invigorating juices that not only delight the taste buds but also nourish the body.",
      },
      history: {
        title: "Our History",
        content:
          "Iceberg Kampot, launched in 2023, is a beacon of modernity in wellness beverages. Our brand is swiftly carving a niche with invigorating, trendsetting juices.",
      },
      mission: {
        title: "Our Mission",
        content:
          "Our Mission is to revolutionize how people enjoy juice. We aim to become a staple in every health-conscious individual's diet, providing a burst of energy and a touch of nature in every sip. As we look to the future, we aspire to expand our reach while maintaining our commitment to quality and community.",
      },
      team: {
        title: "Our Mission",
        content:
          "Our Team is the heart of Iceberg Kampot. A diverse group of passionate individuals, from experienced nutritionists to creative chefs, all united by a shared love for health and wellness. Our team's dedication ensures that every bottle of Iceberg Kampot is a testament to our commitment to excellence.",
      },
    },
  },
  {
    id: 3,
    name: "Products",
    to: "products",
    listItems: ["Products", "Catalogue", "Services", "We Worldwide"],
    sections: {
      catalogue: {
        title: "Product Catalogue",
        content:
          "Our Product Catalogue showcases a vibrant variety of juices, each crafted to perfection. From the antioxidant-rich 'Berry Apple Twist' to the tropical escape 'Mango Pineapple Breeze', our catalogue has something for everyone. Explore our selections to find your perfect juice companion.",
      },
      services: {
        title: "Our Services",
        content:
          "Our Services extend beyond just juices. At Iceberg Kampot, we offer personalized nutrition consultations, subscription boxes tailored to your taste and health goals, and catering services for events that aim to impress with wholesome refreshments.",
      },
      products: {
        title: "Our Services",
        content:
          "Our Products are more than just drinks; they're an experience. Alongside our signature juices, we've introduced a line of health-boosting smoothies, energy shots, and a selection of vegan snacks that complement our beverage offerings. Every product is a promise of quality and purity.",
      },
    },
  },
  {
    id: 4,
    name: "Contact",
    to: "contact",
  },
];

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
    taste: ["sweet", "sour"],
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
    taste: ["sour"],
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
    taste: ["sweet"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "bitter"],
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
    taste: ["sour", "bitter"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sour"],
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
    taste: ["sweet", "bitter"],
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
    taste: ["sweet"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "bitter"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "bitter"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet"],
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
    taste: ["sweet"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet", "bitter"],
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
    taste: ["sweet"],
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
    taste: ["sour"],
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
    taste: ["sweet", "sour"],
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
    taste: ["sweet"],
  },
];
