function wordfinder(string) {
    let number = 0;
    let newString = [...string];
    newString = newString.filter(function(str) {
        return /\S/.test(str);
    });
    console.log(newString);
    console.log(newString.length);
}

wordfinder("F U N D")
