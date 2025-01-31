import { Container } from "./Container";

export const Hero = (): string => {
  return /*html*/ `
    <section class="pt-[115px] bg-black pb-[12px]">
        ${Container(
          "",
          /*html*/ `
            <div class="bg-[url('./assets/hero_img.png')] bg-cover bg-no-repeat py-[30px] bg-center">
                <h1 class="text-white max-w-[277px] text-[2.5rem] font-bold">More Options. More to Love.</h1>
                <button type="button" class="capitalize text-black bg-lime-500 mt-[90px] font-bold text-base px-[20px] py-[18px] transition hover:opacity-80 active:transform-[scale(95%)]">Buy Now</button>
            </div>
        `
        )}
    </section>
  `;
};
