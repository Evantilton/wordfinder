const fs = require('fs');
 
// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');
 
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]


//begin wordFinder
function wordFinder(string) {
    let newString = [...string];

    newString = newString.filter(function(str) {
        return /\S/.test(str);
    });

    let numberCharacters = newString.length;
    let sideLength = Math.sqrt(numberCharacters)

    console.log(newString);
    console.log(numberCharacters);
    console.log(sideLength);
    
    let testVar = horizontalParser(newString, sideLength);
    

} //end wordFinder

function horizontalParser(newString, sideLength) {
    

    console.log(newString.slice(0, sideLength));
    
}

function wordParser(string) {
    let foundWords = [];
    let newString = [];
    if (string = true) {
        for (let i = 0; i < string.length; index++) {
            
        }
    }

}


wordFinder(`C O O L C O O L C O O L C O O L`);


