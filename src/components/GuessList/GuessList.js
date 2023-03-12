import React from "react";
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";

function GuessList({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.slice(0,6).map(guess => <Guess key={crypto.randomUUID()} guess={guess} />)}
            {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map(el => <Guess key={crypto.randomUUID()} />)}
        </div>
    )
}

export default GuessList;
