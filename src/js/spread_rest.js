import { teas } from '@js/teas.js';

export function spreadRestExample() {
    //фильтр для проходки по массиву teas, возвращает назад объекты с категорией шу и шен
    const shuPuers = teas.filter((t) => t.category.includes("Шу"));
    const shenPuers = teas.filter((t) => t.category.includes("Шен"));

    // spread совмещает две категории пуера в новый массив всех пуеров
    const allPuer = [...shuPuers, ...shenPuers];
    console.log("[spread_rest.js] все пуэры (Spread):", allPuer);

    // rest показал также в destructuring.js
    const [first, second, ...otherPuers] = allPuer;
    console.log("[spread_rest.js] первый пуэр:", first);
    console.log("[spread_rest.js] второй пуэр:", second);
    console.log("[spread_rest.js] остальные пуэры (rest):", otherPuers);
}