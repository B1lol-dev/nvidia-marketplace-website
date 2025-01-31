export const Container = (classes: string, childs: string): string => {
  return /*html*/ `
    <div class="container max-w-[1260px] px-[20px] mx-auto ${classes}">
        ${childs}
    </div>`;
};
