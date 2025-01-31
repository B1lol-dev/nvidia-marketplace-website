import "./style.css";

// components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";

// assets
import card1_img from "./assets/products/card1.png";
import card2_img from "./assets/products/card2.png";
import card3_img from "./assets/products/card3.png";
import card4_img from "./assets/products/card4.png";

import card5_img from "./assets/products/card5.png";
import card6_img from "./assets/products/card6.png";
import card7_img from "./assets/products/card7.png";
import card8_img from "./assets/products/card8.png";

import card9_img from "./assets/products/card9.png";
import card10_img from "./assets/products/card10.png";
import card11_img from "./assets/products/card11.png";
import card12_img from "./assets/products/card12.png";
import { Learning } from "./components/Learning";
import { Footer } from "./components/Footer";

const navLinks = ["products", "brands", "deals", "support"];

const productPages = [
  {
    title: "Gaming and Entertainment",
    cards: [
      {
        img: card1_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card2_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card3_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card4_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
    ],
  },
  {
    title: "Graphics Cards, Laptops and Embedded Systems",
    cards: [
      {
        img: card5_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card6_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card7_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card8_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
    ],
  },
  {
    title: "Networking",
    cards: [
      {
        img: card9_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card10_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card11_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
      {
        img: card12_img,
        title: "Graphics Cards and Desktops",
        btnText: "Shop now ",
      },
    ],
  },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div class="font-inter">
    ${Header(navLinks)}
    ${Hero()}
    ${productPages
      .map((page) => {
        return Products(page.title, page.cards);
      })
      .join("")}
    ${Learning()}
    ${Footer()}
  </div>
`;
