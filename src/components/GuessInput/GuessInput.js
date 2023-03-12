import React from "react";

function GuessInput() {
    const [guessValue, setGuessValue] = React.useState("")

    const handleInputChange = event => {
        setGuessValue(event.target.value?.toUpperCase())
    }

    const handleSubmitGuess = event => {
        event.preventDefault()

        console.groupCollapsed("Submitting guess:")
        console.log(guessValue) 
        console.groupEnd();

        setGuessValue("")
    }

    return (
        <form class="guess-input-wrapper" onSubmit={handleSubmitGuess}>
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