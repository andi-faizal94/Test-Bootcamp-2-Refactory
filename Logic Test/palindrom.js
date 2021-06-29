function isPalindrom(str) {

    let array = str.toLowerCase().split('');
    let newArray = array.join('');
    let reverseArray = [...newArray].reverse().join('');

    if (newArray === reverseArray) {
        console.log("palindrom")
        return true
    } else {
        console.log("not palindrom")
        return false
    }
}


// Unit Testing

const a = "Radar";
const b = "Malam";
const c = "Kasur ini rusak";
const d = "Ibu Ratna antar ubi";
const e = "Malas";
const f = "Makan nasi goreng";
const g = "Balonku ada lima";

console.log(isPalindrom(a));
console.log(isPalindrom(b));
console.log(isPalindrom(c));
console.log(isPalindrom(d));
console.log(isPalindrom(e));
console.log(isPalindrom(f));
console.log(isPalindrom(g));