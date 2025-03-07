import { teas } from "@js/teas.js";

export function findNumbersInTeaNames() {
    const numberRegex = /\d+/g; //1 или больше
    teas.forEach(tea => {
        // ищем все числа в названии чая, при этом превращая результат matchAll() в массив
        const matches = [...tea.name.matchAll(numberRegex)];
        if (matches.length > 0) { // и если найдены то 
            console.log(`[matchall.js] в названии "${tea.name}" найдены числа:`,
                matches.map(m => m[0])); // создаеться массив только из найденых числ
        }
    });
}