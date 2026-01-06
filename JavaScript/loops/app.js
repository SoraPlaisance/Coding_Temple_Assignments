
// for(initialization statement; condition; update) {
//     code to run each time
// }
for(let i = 1; i <= 5; i++) {
    console.log("for-iteration", i);
}

// while loop

let i = 1;

while(i <= 3){
    console.log("while-iteration", i);
    i++;
}

// nested loop

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}