// What is an Object?
    // An object is a flexible data structure in JavaScript. Unlike arrays, which are ordered and use numbered positions, objects use key-value pairs, which you define yourself.

    // let car = {
    //     //key: value
    //     make: "Toyota",
    //     model: "Camry",
    //     year: 2021
    // };

// Modifying Object Properties
    // You can change existing values or add new ones.

    // console.log(car.make);

    // let person = {
    //     name: "Jimmy",
    //     age: 29,
    // };

    // console.log(person)

    // person.city = "New York";
    // person.age = 31;

    // console.log(person);

// Adding Functions to Objects (Methods)
    // Objects can also contain functions—these are called methods.
    // Here, start is a method. Notice how we use this.make, this.model etc.—this refers to the object that the method belongs to.

    let car = {
        //key: value
        make: "Toyota",
        model: "Camry",
        year: 2021,
        start: function(minutes) {
            console.log(`The ${this.year} ${this.make} ${this.model} is starting... in ${minutes} minutes`);
        }
        // Template literals (${})
            // $ is part of ${} syntax

            // It means “insert expression”

            // ONLY works inside backticks
        };

    car.start(5); // The 2021 Toyota Camry is starting... in 5 minutes

// Looping Through an Object: for...in
    // To go over all keys in an object, we use a special loop:
    // This prints each value from the person object. The key variable is a placeholder that loops over all property names.

    let person = {
        name: "Jimmy",
        age: 29,
        city: "New York"
    };

    for (let key in person) {
        console.log("key:", person[key]);
    }

// Nested Objects 
    // Objects can contain other objects.

    let student = {
        name: "Alice",
        grade: 10,
        address: {
            street: "123 Main St",
            city: "Springfield",
            zipCode:"62704"
        }
    };

    console.log(student.address.street); // 123 Main St

    