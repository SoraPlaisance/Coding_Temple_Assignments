// LEVEL 1

    // 1

        for (let i = 1; i <= 10; i++) {
            console.log("lvl 1:", i);
        }

    // 2

        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                console.log("lvl 2:", i);
            }
        }
    
    // 3

        for (let i = 10; i >=1; i--) {
            console.log("lvl 3:", i);
        }

    // 4

        let sum = 0;
        for (let i = 1; i <= 5; i++) {
            sum += i;
        }
        console.log("lvl 4:", sum);

    // 5
        for (let i = 1; i <= 5; i++) {
        console.log("lvl 5:", i * i);
        }

// LEVEL 2

    // 6
let animals = ["cat", "dog", "rabbit", "parrot"];
for (let i = 0; i < animals.length; i++) {
  console.log("lvl 6:", animals[i]);
}

// 7
let names = ["Ali", "Sara", "John"];
for (let i = 0; i < names.length; i++) {
  console.log("lvl 7: Hello, " + names[i] + "!");
}

// 8
let original = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < original.length; i++) {
  doubled.push(original[i] * 2);
}
console.log("lvl 8:", doubled); // [2, 4, 6, 8]

// LEVEL 3

    // 9
    for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("lvl 9:", i);
    }
    }

    // 10
    let count = 0;
    for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        count++;
    }
    }
    console.log("lvl 10: Odd numbers count:", count);

    // continue

    for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("skip 5;", i);
    }

    // break

    for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log("stop at 7;", i);
    }