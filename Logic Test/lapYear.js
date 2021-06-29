function lapYear(year) {
    // this.year1 = year1;
    // this.year2 = year2;

    for (i = 0; i <= year.length; i++) {


        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            console.log(i)
            return true
        } else {
            console.log("error")
            return false
        }
    }
    return false
}

console.log(lapYear(1990, 2020));