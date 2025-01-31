export interface ICard {
  img: string;
  title: string;
  btnText: string;
}

import arrow from "../assets/arrow_right.svg";

export const Card = (cardInfo: ICard): string => {
  return /*html*/ `
    <div class="shadow-[0px_17px_27px_-4px_#00000040]">
        <img src=${cardInfo.img} alt=${cardInfo.title} class="w-full object-cover">
        <div class="text-center flex flex-col items-center py-[20px] px-14">
            <h3 class="font-bold max-w-[178px]">${cardInfo.title}</h3>
            <button type="button" class="flex mt-[37px] gap-1 justify-between items-center">${cardInfo.btnText} <img src=${arrow} alt=">"></button>
        </div>
    </div>  
  `;
};
