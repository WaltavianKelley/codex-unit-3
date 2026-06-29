import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello Figlet!!");
  console.log(text);
}

doStuff();