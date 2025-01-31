import { Card, ICard } from "./Card";
import { Container } from "./Container";

export const Products = (title: string, cards: any[]): string => {
  return /*html*/ `
    <section class="pb-[40px]">
        ${Container(
          "",
          /*html*/ `
            <div>
                <h1 class="text-center font-bold text-5xl pt-[12px]">${title}</h1>
                <div class="grid grid-cols-4 justify-center gap-[40px] mt-[40px] max-[1200px]:grid-cols-2 max-sm:grid-cols-1">
                    ${cards.map((card: ICard) => Card(card)).join("")}
                </div>
            </div>
        `
        )}
    </section>
  `;
};
