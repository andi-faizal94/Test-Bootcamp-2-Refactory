function lapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

let a = 1900;
let b = 2020;

for (a; a <= b; a++) {
    if (lapYear(a)) {
        console.log(a)
    }
}