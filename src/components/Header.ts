import { Container } from "./Container";

export const Header = (nav_links: string[]) => {
  return /*html*/ `
    <header class="fixed w-full">
      <nav>
        ${Container(
          "flex justify-between",
          /*html*/ `
            <a href="#">
                <h1>Marketplace</h1>
            </a>

            <ul class="flex ">
                ${nav_links.map((link) => {
                  return /*html*/ `
                    <a href=${"#" + link}>
                        <li>${link}</li>
                    </a>
                    `;
                })}
            </ul>

            <form>
                <input type="text">
                <button type="submit">S</button>
            </form>    
        `
        )}
      </nav>
    </header>
    `;
};
