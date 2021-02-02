function stringCount(x) {
    return x.length;
}
console.log(stringCount("Test 1"));
function stringCountNoSpaces(x) {
    var num = x.replace(/\s+/, "").length;
    return num;
}
console.log(stringCountNoSpaces("Test 2"));
function stringCombine(x, spaces) {
    var num;
    if (spaces == true) {
        num = x.replace(/\s+/, "").length;
    }
    else {
        num = x.length;
    }
    return num;
}
console.log(stringCombine("Test 3"));
