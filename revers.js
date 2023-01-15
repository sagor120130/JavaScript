function reverStr(str) {
    let reverse = " ";
    for (let i = 0; i < str.length; i++) {
        let char = srt[i];
        reverse = char + reverse
    }
    return reverse;
}
let foodBlog = "amr khuda lagse"
let forMan = reverStr(foodBlog)
console.log(forMan);

