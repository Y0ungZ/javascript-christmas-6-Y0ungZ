export const ERROR_PRIFIX = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  invalidDay: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
});

export const INPUT_MESSAGE = Object.freeze({
  day: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  event: day => `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  titleMenu: '\n<주문 메뉴>',
  menuTemplate: (name, count) => `${name} ${count}개`,
});
