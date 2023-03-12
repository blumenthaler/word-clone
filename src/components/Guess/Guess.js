import React from "react";
import { range } from "../../utils";

function Guess({ guess = [] }) {
    return (
        <p className="guess">
            {
                guess && guess?.length > 0 ? 
                    <>
                        {
                            guess.map(guessData => (
                                <span key={crypto.randomUUID()} className={`cell ${guessData.status}`}>{guessData?.letter}</span>
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
