import React from 'react';

import "./ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
    return (
        <>
        {/* <h1>I am winner</h1> */}
        <button className="reset-btn" onClick={resetBoard}>Play Again</button>
        </>
    )
}