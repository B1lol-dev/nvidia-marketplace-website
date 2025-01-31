import { Container } from "./Container";

import search_icon from "../assets/search.svg";

export const Header = (nav_links: string[]): string => {
  return /*html*/ `
    <header class="fixed w-full p-[25px] bg-black">
      <nav class="text-white">
        ${Container(
          "flex justify-between items-center max-[550px]:gap-5 max-[400px]:justify-center",
          /*html*/ `
            <a href="#" class="font-semibold text-[1.75rem]">
                <h1>Marketplace</h1>
            </a>

            <ul class="flex gap-[40px] max-[950px]:hidden" id="nav_collection">
                ${nav_links
                  .map((link) => {
                    return /*html*/ `
                    <a href="#${link}" class="capitalize text-[1.125rem] text-base">
                        <li>${link}</li>
                    </a>
                    `;
                  })
                  .join("")}
            </ul>

            <form class="relative flex justify-end items-center max-[400px]:hidden">
                <input type="text" placeholder="Search marketplace" class="bg-white placeholder:text-[#666] text-[#666] p-[14px] max-w-[300px] w-full transition focus:outline-3 focus:outline-lime-500">
                <button type="button" class="absolute right-[14px]">
                  <img src=${search_icon} alt="search" class="select-none">
                </button>
            </form>    
        `
        )}
      </nav>
    </header>
    `;
};
