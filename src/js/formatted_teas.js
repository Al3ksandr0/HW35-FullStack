import { convertedTeas } from "@js/bigint.js";

export const formattedTeas = convertedTeas.map((tea) => {
    return {
        title: `${tea.name} (${tea.category})`,
        priceText: `${tea.priceUAH} грн`,
    };
});

//тут формируем перед выводов в main.js