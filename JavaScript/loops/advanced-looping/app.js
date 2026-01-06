// while loop

let i = 1;
while (i <= 3) {
    console.log("While loop iteration:", i);
    i++;
}

// nested loop

for (let x = 1; x <= 2; x++) {
    for (let y = 1; y <= 2; y++) {
        console.log(`x = ${x}, y = ${y}`);
    }
}

// break and continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log("Loop with break/continue:", i);
}