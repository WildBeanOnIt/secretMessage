let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//OEM Array haha
console.log(secretMessage.length);
// console.log(secretMessage);

// New pop array.
let removeLastString = secretMessage.pop();
// New modified array
console.log(secretMessage.length);

// Adding "to" and "Program" to the array .push
let addToAndProgramToArray = secretMessage.push("to", "Program");
console.log(secretMessage);

// Changing the word "easily" to "right" .toSpliced
let changingEasilyToRight = secretMessage.toSpliced(7, 4, "right");
console.log(secretMessage);
console.log(changingEasilyToRight);

// Removing the first string from the arr.
let removeFirstStringFromArr = secretMessage.shift(0);
console.log(removeFirstStringFromArr);
console.log(secretMessage);

// Add the word "Programming" at the beginning.
let addProgrammingAtTheBeginning = secretMessage.unshift("Programming");
console.log(addProgrammingAtTheBeginning);


// Remove 5 strings and replace them with the word "know," => "get", "right", "the", "first", "time",
let removeFiveStringsReplacedWithKnow = changingEasilyToRight.toSpliced(6, 2, "know");
//? 'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'right', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'to', 'Program'
console.log(removeFiveStringsReplacedWithKnow);

// console.log(secretMessage.join(" "));
console.log(removeFiveStringsReplacedWithKnow.join(" "));