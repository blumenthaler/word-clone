import React from "react";

function Banner({
    userHasWon,
    userHasLost,
    numOfAttempts,
    answer
}) {
    const WinningBanner = ({ numOfAttempts }) => (

        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{" "}{numOfAttempts} guesses</strong>.
            </p>
        </div>
    )

    const LosingBanner = ({ answer }) => (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )

    return (
        <>
            {userHasWon ? <WinningBanner numOfAttempts={numOfAttempts} />
            : userHasLost ? <LosingBanner answer={answer} />
            : null}
        </>
    )
}

export default Banner;
