function dice() {
    return Math.floor(Math.random() * 6 + 1);
}

console.log("Rolling dice...");
let d1=dice();
console.log("Die 1:" + d1);
let d2=dice();
console.log("Die 2: " + d2);
console.log("Total value: " + d1+d2);
if(d1 + d2 <= 6) {
    console.log("You lose!");
} else {
    console.log("You win!");
}