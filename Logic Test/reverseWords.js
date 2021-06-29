function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " ";

    }
    if (result[7] === "t") {
        console.log(result[7].toUpperCase());
    } else {
        console.log("haloo")
    }


    result[11].toLowerCase();
    return result
}


console.log(reverseInPlace("I am A Great human"))