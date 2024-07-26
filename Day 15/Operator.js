let a = 5;
let b= 2;

//Assignment Operators
//JavaScript Arithmetic Operators perform arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (**).
function Assignment(){
    console.log("a+=b",a+=b);
    console.log("a-=b",a-=b);
    console.log("a*=b",a*=b);
    console.log("a/=b",a/=b);
    console.log("a%=b",a%=b);
    console.log("a**=b",a**=b);
    console.log("a=b",a==b);
    console.log("\n");
    console.log("\n");
}


// Comparison Operators
//Comparison operators are mainly used to perform the logical operations that determine the equality or difference between the values.
function Comparison(){
    console.log("a==b",a==b);
    console.log("a===b",a===b);
    console.log("a!=b",a!=b);
    console.log("a!==b",a!==b);
    console.log("a>b",a>b);
    console.log("a<b",a<b);
    console.log("a>b",a>b);
    console.log("a>=b",a>=b);
    console.log("a<=b",a<=b);
    console.log("\n");
    console.log("\n");
}
//Shift Operator
function SHIFT(){
    console.log("a<<=b",a<<=b);
    console.log("a>>=b",a>>=b);
    console.log("a>>>=b",a>>>=b);
    console.log("\n");
    console.log("\n");
}


//Logical Operators
//JavaScript Logical Operators perform logical operations: AND (&&), OR (||), and NOT (!), evaluating expressions and returning boolean values.
function Logic(){
    console.log("a&&=b",a&&=b);
    console.log("a||=b",a||=b);
    console.log("a??=b",a??=b);
    console.log("\n");
    console.log("\n");
}

//Bitwise Operators
//The bitwise operator in JavaScript is used to convert the number to a 32-bit binary number and perform the bitwise operation. The number is converted back to the 64-bit number after the result. 

function BIT(){
    console.log("a&b",a&b);
    console.log("a|b",a|b);
    console.log("a^=b",a^b);
    console.log("~a",~a);
    console.log("\n");
    console.log("\n");
}

//Ternary Operator
function Ternary(){
    console.log("a&b",a>b?35:25);
    console.log("\n");
    console.log("\n");
}


    console.log("Assignment operator");
    Assignment()
    console.log("Comparison operator");
    Comparison()
    console.log("SHIFT operator");
    SHIFT()
    console.log("Logic operator");
    Logic()
    console.log("BIT operator");
    BIT()
    console.log("Ternary operator");
    Ternary()
