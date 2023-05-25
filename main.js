const cap = 4e6;

let prev = 0;
let curr = 1;
let next;

let total = 0;

while (curr < cap) {

    next = prev + curr;
    prev = curr;
    curr = next;

    if (curr % 2 === 0) {
        total += curr;
    } 
}

console.log(total);
