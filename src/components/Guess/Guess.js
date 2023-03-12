import React from "react";
import { range } from "../../utils";

function Guess({ guess = "" }) {
    return (
        <p className="guess">
            {
                guess ? 
                    <>
                        {
                            guess.split("").map(letter => (
                                <span key={crypto.randomUUID()} className="cell">{letter}</span>
                            ))
                        }
                    </>
                :
                    <>
                        {range(0,5).map(element => (
                            <span key={crypto.randomUUID()} className="cell" />
                        ))}
                    </>
            }
        </p>
    )
}
export default Guess;
