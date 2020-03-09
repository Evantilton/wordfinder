function wordfinder(string) {
    let newString = [...string];

    newString = newString.filter(function(str) {
        return /\S/.test(str);
    });
    let length = newString.length;
    let sideLength = Math.sqrt(length)
    

    console.log(newString);
    console.log(newString.length);
    console.log(sideLength);

    
}

wordfinder(`B A D A B A D A B A D A B A D A`)
