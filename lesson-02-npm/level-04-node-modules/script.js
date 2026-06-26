import { cpus, totalmem, freemem, machine, } from "node:os";

console.log("CPU info:", cpus());
console.log("Total Memory:", totalmem());
console.log("Free Memory:", freemem());
console.log("Machine:", machine());