import { Container } from "./Container";

import computer_img from "../assets/computer.png";

export const Learning = (btnLink?: string): string => {
  return /*html*/ `
    <section class="py-[21px]">
        ${Container(
          "",
          /*html*/ `
          <div class="flex items-center gap-[40px] max-[1200px]:gap-3 max-[1150px]:flex-col max-[1150px]:items-start max-[1150px]:gap-8">
            <img src=${computer_img} alt="computer" class="max-[1150px]:w-full">
            <div>
                <h2 class="text-lime-500 text-5xl font-bold max-w-[416px]">NVIDIA Deep Learning Institute</h2>
                <p class="text-black font-bold text-[1.125rem] mt-7 max-w-[400px]">Education and Training Solutions to Solve the World's Most Challenging Problems</p>
                <a href=${btnLink}><button type="button" class="capitalize bg-lime-500 font-bold text-black py-[20px] px-8 mt-14 transition hover:opacity-80 active:transform-[scale(95%)]">Get Online Training</button></a>
            </div>
          </div>
        `
        )}
    </section>
  `;
};
