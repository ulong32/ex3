function dice() {
    return Math.floor(Math.random() * 6 + 1);
}
function main(input){
    console.log("What is your name?");
    let name = input.shift().trim();
    console.log("Hello " + name + "!");
    console.log("Rolling dice...");
    let d1=dice();
    console.log("Die 1:" + d1);
    let d2=dice();
    console.log("Die 2: " + d2);
    console.log("Total value: " + d1+d2);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n'));