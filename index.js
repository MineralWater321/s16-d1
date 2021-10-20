//while loop
/* -while loop takes in an expression/ condition, if the condition evaluates to true, the 
*/

let count = 5;

while(count >= 0){
	console.log("While: " + count);
	count--;
}

/* Sample output
 	While: 5
 	While: 4
 	While: 3
 	While: 2
 	While: 1
 	While: 0
*/

//Using while loop, display the following output:
/* Sample output:
	While: 0
	While: 1
	While: 2
	While: 3
	While: 4
	While: 5
	While: 6
	While: 7
	While: 8
	While: 9
*/
count1 = 0
while(count1 <= 9){
	console.log("While: " + count1);
	count1++;
}

/* do while loop
	- a do-while loop works a lot like the while loop. But unlike the while loop, do-while loops guarantee that the code will be executed at least once.
	Syntax:
		do {
			statement/s;
		} while(expression/condition)
*/

let number = Number(prompt("Give me a number"));

do {
	console.log("Do while: " + number);
	number += 1;
} while (number < 10)

/* For Loop
	- for loop is more flexible than while and do-while loops. It consist of three parts:
	1. initialization - a value that will track the progression of the loop.
	2. expression/condition - determines whether the loop will run one more time.
	3. finalExpression - indicates how to advance the loop.

	Syntax:
		for(initialization; expression/condition; finalExpression){
			statement/s;
		}
*/

for(let count3 = 0; count3 <= 20; count3++){
	console.log(count3);
}

/* Expected output:
	0
	1
	2
	3
*/
console.log("Another example:");
let myString = 'alex';

//.length
console.log(typeof myString.length);

console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);

console.log("Word Loop");
for(let x = 0; x < myString.length; x++){
	console.log(myString[x]);
}

/* Sample output.
	a
	l
	e
	x
*/

let myName = "AlEx";

for(let i = 0; i < myName.length; i++){

	if(
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "o" ||
		myName[i].toLowerCase() == "u" 
	){
		console.log(3);
	}else {
		console.log(myName[i])
	}
}

/* Continue and Break Statements
	continue - a statement that allows the code to go to the next iteration of the loop without finishing the execution of all statements in a code block
	break - a statement that is used to terminate the current loop once a match has been found
*/

for(let count4 = 0; count4 <=20; count4++){
	if(count4 % 2 === 0){
		continue;
	}
	console.log("Continue and Break " + count4);
	if(count4 > 10){
		break;
	}
}

console.log("Iterating the length of String")

let name = "alexandro";

for(let i = 0; i < name.length; i++){
	console.log(name[i]);

	if(name[i].toLowerCase() === "a"){
		console.log("Continue to the next iteration");
		continue;
	}
	
	if(name[i] === "d"){
		break;
	}
}