import React from "react";

function GuessList({ guesses }) {
    const GuessItem = ({ guess }) => {
        return (
            <p className="guess">{guess}</p>
        )
    }

    return (
        <div className="guess-results">
            {guesses.map(guess => <GuessItem key={crypto.randomUUID()} guess={guess} />)}
        </div>
    )
}

export default GuessList;
