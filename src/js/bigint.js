import { teas } from "./teas.js";

const exRate = 27000n; // представим что это по курсу 0.27 коп, 1 йен в грн

export const convertedTeas = teas.map((tea) => ({
    ...tea,
    priceUAH: tea.price * exRate,
}));
// новый массив convertedTeas где каждый чай получает новое поле priceUAH с ценой на онсове exRate