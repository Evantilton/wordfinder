const fs = require('fs');
 
// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');
 
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]

//begin wordFinder
function wordFinder(rows, columns, string) {
    newString = [...string];
    let numberOfRows = rows;
    let numberOfColumns = columns;

    newString = newString.filter(function(str) {
        return /\S/.test(str);
    });


    let numberCharacters = newString.length;
    

    console.log("newString", newString);
    console.log("number of Characters",numberCharacters);
    console.log("number of Rows",numberOfRows);
    console.log("number of columns",numberOfColumns);
    
    
    // let i,j,horizontalArray = [],chunk = numberOfColumns;
    // for (i=0,j=newString.length; i<j; i+=chunk) {
    //     horizontalArray.push(newString.slice(i,i+chunk));
    // }
    // console.log(horizontalArray);

    let horizontalArray = horizontalParser(newString, numberOfColumns);
    console.log("THIS IS HORIZONTAL ARRAY", horizontalArray);


    let verticalArray = verticalParser(newString, numberOfRows);
    console.log("THIS IS VERTICAL ARRAY", verticalArray)

}

function horizontalParser(newString, numberOfColumns) {

    let i,j,horizontalArray = [],chunk = numberOfColumns;
    for (i=0,j=newString.length; i<j; i+=chunk) {
        horizontalArray.push(newString.slice(i,i+chunk));
    }
    return(horizontalArray);

}

function verticalParser(newString, numberOfRows) {
    let i,j,verticalArray = [],chunk = numberOfRows;
    for (i=0,j=newString.length; i<j; i+=chunk) {
        verticalArray.push(newString.slice(i,i+chunk));
    }
    return(verticalArray);
}

    

// function wordParser(string) {
//     let foundWords = [];
//     let newString = [];
//     if (string = true) {
//         for (let i = 0; i < string.length; index++) {
            
//         }
//     }

// }


// wordFinder(2,2,`C O O L C O O L C O O L C O O L`);


wordFinder (15,15,`A T L L F U V D E Y O B Z V D
W F B N E D X G H E A N P O R
O T V B Y L A L G T D K E A A
D O O W D R A H H E L A S P Z
A P P E A K H R O F X W L X O
W B R G A S O M M B R O K E R
M C X G X O U I E O K M Y K W
A O E F M R S L S N L R S I I
S N P D B C E Q P R I U K U Q
T E G R I P E B O Q U I Q S C
B P A S D Q P E T X J P S E S
B R K R R E U E T T D Z D K L
L B J B C B B L E U B I U R F
L N H S F H T K R K G H Y A M
O J H D N Q A J S Q P L R M U`)