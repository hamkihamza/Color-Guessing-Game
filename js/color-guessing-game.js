const COLOR_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];


function runGame() {
    let guess= '';
    let correct = false;
    let numTries=0;
    
    const targetIndex = Math.floor(Math.random() * COLOR_ARRAY.length);
    console.log("target Index:" + targetIndex);

    const target = COLOR_ARRAY[targetIndex] ;
    console.log('target =' + target);

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLOR_ARRAY + '\n\nWhat color am I thinking of?\n')
     if (guess===null) {
        alert ("You are exiting the game");
        return;
    } 

        numTries ++;
        correct= checkGuess(guess,target)
    } while(!correct);
alert('You got the right one! The color was ' + target + '.\n\nIt took you' + numTries + ' tries to guess correctly');

}

function checkGuess(guess, target) {
    let correct = false;

    // 1. (if) User enters a color that doesn't exist in COLORS_ARRAY
    if (!COLOR_ARRAY.includes(guess)) {
        
        alert('You have not entered a color \n\nPlease enter one of these colors: blue, cyan, gold, gray, green, magenta, orange, red, white, yellow');
    }
    // 2. (else if) User enters a color that is HIGHER than target (guess > target)
    else if (guess > target) {
        alert('The color is HIGHER than your guess');
    }
    // 3. (else if) User enters a color that is LOWER than target (guess < target) 
    else if (guess < target) {
        alert('The color is LOWER than your guess');
    }
    // 4. (else) User enters the correct color
    else {
        correct = true;

    }
    return correct
}

