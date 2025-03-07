import { teas } from '@js/teas.js';

export function safeCheckTea(teaName) {
    const tea = teas.find((t) => t.name === teaName); // ищем чай по названию в массиве teas, если чай найден получаем объект, если нет будет undefined

    const price = tea?.price ?? "цена не найдена";
    //два варианта: когда чай найден, берем его цену
    // если tea будет undefined, подставляем "цена не найдена"

    console.log(`[optional_chaining.js] цена чая "${teaName}":`, price);
}