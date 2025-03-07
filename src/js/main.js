import { formattedTeas } from "./formatted_teas.js";
import { showDestructuringExample } from "./destructuring.js";
import { safeCheckTea } from "./optional_chaining.js";
import { spreadRestExample } from "./spread_rest.js";
import { addSymbolProperties } from "./symbol.js";
import { getLastTea } from "@js/array_at.js";
import { findNumbersInTeaNames } from "@js/matchall.js";

console.log("[main.js] отформатированные чаи:", formattedTeas);

showDestructuringExample();

safeCheckTea("Алишань Улун");
safeCheckTea("Рандомный Чай");

spreadRestExample();

addSymbolProperties();

getLastTea();

findNumbersInTeaNames();