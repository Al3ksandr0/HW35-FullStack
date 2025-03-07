import { teas } from '@js/teas.js';

export function addSymbolProperties() {

    const idSymbol = Symbol("id"); // создаем Symbol который будет ключом

    teas.forEach((tea, index) => { // проходка по массиву teas и передача его объктов + индекс текущего елемента 0

        tea[idSymbol] = index + 1; // тут делаем устанвоку с 1
        console.log(`(symbol.js) ${tea.name}: cкрытый id =`, tea[idSymbol]);
    });
}