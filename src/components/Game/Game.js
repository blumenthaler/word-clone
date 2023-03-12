import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessList from '../GuessList/GuessList';
import Banner from "../Banner/Banner";

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
    const [answer, setAnswer] = React.useState(sample(WORDS))
    const [guesses, setGuesses] = React.useState([])
    const [userHasWon, setUserHasWon] = React.useState(false)
    const [userHasLost, setUserHasLost] = React.useState(false)
    const [numOfAttempts, setNumOfAttempts] = React.useState(0)

    React.useEffect(function logAnswer() {
        console.groupCollapsed("Answer:")
        console.log(answer)
        console.groupEnd();
    }, [answer])

    React.useEffect(function determineGameOver() {
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

    const resetGame = () => {
        setAnswer(sample(WORDS))
        if (userHasWon) setUserHasWon(false)
        if (userHasLost) setUserHasLost(false)
        setGuesses([])
        setNumOfAttempts(0)
    }

    const ResetBtn = () => (
        <button onClick={resetGame}>Play again!</button>
    )

    return (
        <>
            <GuessList guesses={guesses} setGuesses={setGuesses} />
            {userHasWon || userHasLost ? (
                <ResetBtn />
            ) : null}
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
