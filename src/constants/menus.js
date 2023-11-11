export const CONVERT_STRING = Object.freeze({
  에피타이저: 'appetizer',
  메인: 'main',
  디저트: 'dessert',
  음료: 'drink',
});

const appetizer = Object.freeze({
  시저샐러드: 8000,
  양송이수프: 6000,
  타파스: 5500,
});

const main = Object.freeze({
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
});

const dessert = Object.freeze({
  초코케이크: 15000,
  아이스크림: 5000,
});

const drink = Object.freeze({
  레드와인: 60000,
  샴페인: 25000,
  제로콜라: 3000,
});

export const MENUS = Object.freeze({
  appetizer,
  main,
  dessert,
  drink,
});
