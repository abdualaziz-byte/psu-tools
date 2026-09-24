import { AvoidLib } from "/static/libavoid/index.js";

await AvoidLib.load();

window.AvoidLib = AvoidLib.getInstance();

console.log("LIBAVOID READY:", window.AvoidLib);

await import("/static/js/mapjs/arrows.js");