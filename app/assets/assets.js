import cart from "./cart.svg"
import facebook from "./facebook.svg"
import filter from "./filter.svg"
import github from "./github.svg"
import golden_star from "./golden star.svg"
import instagram from "./instagram.svg"
import leftArrow from "./leftArrow.svg"
import rightArrow from "./rightArrow.svg"
import mail from "./mail.svg"
import profile from "./profile.svg"
import search from "./search.svg"
import star from "./star.svg"
import x from "./x.svg"
import calvinKlein from "./calvinklein.png"
import gucci from "./gucci.png"
import prada from "./prada.png"
import versace from "./versace.png"
import zara from "./zara.png"
import shirt1 from "./image 7.png"
import shirt2 from "./image 8.png"
import shirt3 from "./image1.png"
import shirt4 from "./image2.png"
import shirt5 from "./image3.png"
import shirt6 from "./image4.png"
import shirt7 from "./image5.png"
import short1 from "./image6.png"
import pants1 from "./image9.png"
import shirt8 from "./image10.png"
import shirt9 from "./image11.png"
import shirt10 from "./image12.png"
import methods from "./paymentsIcon.png"
import banner1 from "./image 12.png"
import banner2 from "./image 13.png"
import banner3 from "./image 14.png"
import banner4 from "./image 11.png"
import menu from "./menu.svg"
import verify from "./verify.svg"
import hero_section from "./heroImage.png"
import arrow from "./arrow.svg"
import correct from "./correct.svg"
import trash from "./trash.svg"

export const assets = {
  trash,
  correct,
  arrow,
  verify,
  hero_section,
  menu,
  cart,
  facebook,
  filter,
  github,
  golden_star,
  instagram,
  leftArrow,
  rightArrow,
  mail,
  profile,
  search,
  star,
  x,
  calvinKlein,
  gucci,
  prada,
  versace,
  zara,
  shirt1,
  shirt2,
  shirt3,
  shirt4,
  shirt5,
  shirt6,
  shirt7,
  short1,
  pants1,
  methods,
  banner1,
  banner2,
  banner3,
  banner4,
};

  export const products = [
    {
    id:"aaa",
    image:[shirt2,shirt9,shirt10],
    name:"Basic Cotton T-Shirt",
    description:"High-quality cotton T-shirt suitable for daily wear.",
    price:100,
    sizes:["S", "M", "L", "XL"],
    bestseller: true,
    category:"tshirt",
    colors:["white", "black", "gray"],
  },
  {
    id: "p1",
    image: [shirt1,shirt2,shirt3],
    name: "Basic Cotton T-Shirt",
    description: "High-quality cotton T-shirt suitable for daily wear.",
    price: 120,
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    category: "tshirt",
    colors: ["white", "black", "gray"],
  },
  {
    id: "p2",
    image: [shirt3,shirt1,shirt3],
    name: "Oversized Hoodie",
    description: "Soft oversized hoodie perfect for winter.",
    price: 350,
    sizes: ["M", "L", "XL"],
    bestseller: false,
    category: "hoodie",
    colors: ["black", "navy"],
  },
  {
    id: "p3",
    image: [shirt4,shirt2,shirt1],
    name: "Casual Polo Shirt",
    description: "Breathable polo shirt ideal for outings.",
    price: 220,
    sizes: ["S", "M", "L"],
    bestseller: true,
    category: "polo",
    colors: ["blue", "white"],
  },
  {
    id: "p4",
    image: [shirt6,shirt4,shirt5],
    name: "Slim Fit Shirt",
    description: "Formal slim-fit shirt suitable for work.",
    price: 280,
    sizes: ["M", "L", "XL"],
    bestseller: false,
    category: "shirt",
    colors: ["white", "lightblue"],
  },
  {
    id: "p5",
    image: [shirt5,shirt5,shirt6],
    name: "Sport Training T-shirt",
    description: "Moisture-wicking T-shirt for training.",
    price: 150,
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    category: "sport",
    colors: ["red", "black"],
  },
  {
    id: "p6",
    image: [shirt7,shirt4,shirt6],
    name: "Summer Linen Shirt",
    description: "Lightweight linen shirt perfect for hot weather.",
    price: 300,
    sizes: ["M", "L"],
    bestseller: false,
    category: "linen",
    colors: ["beige", "white"],
  },
  {
    id: "p7",
    image: [short1,shirt4,shirt6],
    name: "Summer Linen Shirt",
    description: "Lightweight linen shirt perfect for hot weather.",
    price: 300,
    sizes: ["M", "L"],
    bestseller: false,
    category: "linen",
    colors: ["beige", "white"],
  },
  {
    id: "p8",
    image: [pants1,shirt4,shirt6],
    name: "Summer Linen Shirt",
    description: "Lightweight linen shirt perfect for hot weather.",
    price: 300,
    sizes: ["M", "L"],
    bestseller: false,
    category: "pants",
    colors: ["beige", "white"],
  },
  
];