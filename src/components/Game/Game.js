import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessList from '../GuessList/GuessList';
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const isCorrectGuess = (guessArray) => {
    let correctLetters = []
    for (const letterData of guessArray) {
        if (letterData?.status === "correct") {
            correctLetters?.push(letterData)
        }
    }
    const isCorrect = correctLetters?.length === guessArray?.length
    return isCorrect
}

function Game() {
    const [guesses, setGuesses] = React.useState([])
    const [userHasWon, setUserHasWon] = React.useState(false)
    const [numOfAttempts, setNumOfAttempts] = React.useState(0)
    const [userHasLost, setUserHasLost] = React.useState(false)

    React.useEffect(() => {
        if (guesses.length > 0 && !userHasWon && !userHasLost) {
            const foundWinningGuess = guesses?.find(guess => isCorrectGuess(guess))

            if (foundWinningGuess) {
                setUserHasWon(true)
                const indexOfWin = guesses?.findIndex(guess => JSON.stringify(guess) === JSON.stringify(foundWinningGuess))
                setNumOfAttempts(indexOfWin + 1)
            } else if (guesses.length === 6) {
                setUserHasLost(true)
            }
        }
    }, [guesses])

    return (
        <>
            <GuessList guesses={guesses} setGuesses={setGuesses} />
            <GuessInput 
                guesses={guesses} 
                setGuesses={setGuesses} 
                answer={answer} 
            />
            <Banner 
                userHasWon={userHasWon} 
                userHasLost={userHasLost} 
                numOfAttempts={numOfAttempts} 
                answer={answer} 
            />
        </>
    );
}

export default Game;
