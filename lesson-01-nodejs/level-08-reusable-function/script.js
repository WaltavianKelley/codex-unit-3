const letters = [
    "aaa",
    "bbb",
    "ccc",
    "ddd",
    "eee",
    "fff",
    "ggg",
    "hhh",
    "iii",
    "jjj",
];

function showItems(anyArray) {
for (let index=0; index < letters.length; index++)
    const item = anyArray[index];
    const itemNumber = index + 1;
    console.log(itemNumber, item);

}

showItems(letters);
