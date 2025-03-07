import { teas } from "@js/teas.js";

export function getLastTea() {
    const lastTea = teas.at(-1);
    console.log("[array_at.js] последний чай в списке:", lastTea);
}
