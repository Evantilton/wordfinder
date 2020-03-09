const fs = require('fs');
 
// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');
 
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]

function wordfinder(string) {
    let newString = [...string];

    newString = newString.filter(function(str) {
        return /\S/.test(str);
    });

    let length = newString.length;
    let sideLength = Math.sqrt(length)

    console.log(wordArray)
    console.log(newString);
    console.log(newString.length);
    console.log(sideLength);

    
}

wordfinder(`B A D A B A D A B A D A B A D A`)
