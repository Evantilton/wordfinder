Word Find Solver
Write a program that given a string input of the following form
"A T L L F U V D E Y O B Z V D
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
O J H D N Q A J S Q P L R M U"
Will find all 4 letter or longer words.

Notes
● The words can go in any direction: up, down, left, or right (not diagonal)
● It should handle arbitrarily sized puzzle inputs. The above is 15x15 but the solution
should work just as well with any other size
● The solution can just print out the list of found words, it does not need to print out their
position or direction
● You can use any language you like although we would like to be able to run your
submission, so please include instructions on compiling/running if you think it’s
necessary
● Hint: You may want to use the dictionary that is included on your system
○ For OS X: /usr/share/dict/words

Bonus
● Only return the longest valid word in a sequence of letters:
○ Don't return "broke" and "broker": only "broker"
○ Don’t return “hard” and “wood”; only “hardwood”

Criteria for Success
● Correctness Does the program work as requested against both the provided input
above and additional word find inputs?
● Readability Is the code easy to understand? -- do we feel it would be easy to safely
modify the code in the future if needed
● Testability You do not need to write unit tests for this assignment, but we are interested
in seeing code that would be easy to write tests for
● Performance This is less important than the other criteria, but a faster program would
be a bonus



TASK LIST:
[] figure out how long the string is (1x1, 2x2, 15x15), we will need to know that I think.
[] have it take each line horizontally forward and backward and put it into an object.
[] have it take each line vertically, forward and backward and put it into an object.
[] have it take each line diagonally, forward and backward and put it into an object.
[] double check that the dictionary works as intended.
