import { Container } from "./Container";

// assets
import logo from "../assets/logo.png";

export const Footer = (): string => {
  return /*html*/ `
        <footer class="py-[100px_80px]">
            ${Container(
              "flex justify-between items-center max-[350px]:flex-col max-[350px]:gap-5",
              /*html*/ `
                <img src=${logo} alt="nvidia" class="max-w-[100px] w-full">
                <h3 class="text-[#666] font-extrabold text-[1.125rem]">USA - United States</h3>
              `
            )}
        </footer>
    `;
};
