import React from "react";
import { checkGuess } from '../../game-helpers';

function GuessInput({ guesses, setGuesses, answer }) {
    const [guessValue, setGuessValue] = React.useState("")

    const handleInputChange = event => {
        setGuessValue(event.target.value?.toUpperCase())
    }

    const handleSubmitGuess = event => {
        event.preventDefault()
        setGuesses([...guesses, checkGuess(guessValue, answer)])
        setGuessValue("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text" 
                value={guessValue} 
                onChange={handleInputChange} 
                pattern="[A-Za-z]{5}"
                title="5 characters required for a guess."
            />
        </form>
    )
}

export default GuessInput;