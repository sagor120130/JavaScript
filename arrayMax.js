let marks = [20, 40, 30, 50, 80, 60, 90, 99, 200];
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    let element = marks [i];
    if( element  > max){
        max = element;
    }
}
console.log("Highest value is: ", max);