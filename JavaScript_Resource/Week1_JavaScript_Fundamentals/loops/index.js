//while loop
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}


//do while
let j = 0;
do {
    console.log(j);
    j++;
} while (i < 3)


//for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}


//for..of
const iterable = [10, 20, 30];

for (const value of iterable) {
    console.log(value)
}


//for ... in

const object = { name: "John", age: 20 };

for (const key in object) {
    console.log(key)
}
