// Function 1 - name/type
function stringCount (x: string): number // << return type
{
    return x.length;
}

// Test (Function 1)
console.log(stringCount("Test 1"));

// Function 2 
function stringCountNoSpaces(x:string): number
{
    let num: number = x.replace(/\s+/,"").length;
    return num;
}

// Test (Function 2)
console.log(stringCountNoSpaces("Test 2"));

// Function 3
function stringCombine(x:string,spaces?: boolean): number // ? - optional
{
    let num: number;

    if(spaces == true)
    {
       num = x.replace(/\s+/,"").length;
    }
    else
    {
        num = x.length;
    }

    return num;
}

// Test (Function 3)
console.log(stringCombine("Test 3"));