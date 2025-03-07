import { teas } from '@js/teas.js';

export function showDestructuringExample() {
    const { teas: destructuredTeas } = { teas };
    // создаем временный объект { teas } после чего деструктурируем его, переименовывая teas в destructuredTeas

    const [firstTea, secondTea, ...others] = destructuredTeas;
    // далее массив destructuredTeas разбираеться так чтобы выделить первых два элемента с чаем, и также "остальное" (остальные 13 чаев)

    console.log("[destructuring.js] первый чай:", firstTea);
    console.log("[destructuring.js] второй чай:", secondTea);
    console.log("[destructuring.js] остальные:", others);
}