import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log("Exporting and importing code helps keep programs organized, reusable, and easier to maintain.")