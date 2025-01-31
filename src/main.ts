import "./style.css";

// components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const navLinks = ["products", "brands", "deals", "support"];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div>
    ${Header(navLinks)}
    ${Hero()}
  </div>
`;
