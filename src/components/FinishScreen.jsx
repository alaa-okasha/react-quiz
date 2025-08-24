import React from "react";

export default function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const persantage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(persantage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart quiz
      </button>
    </>
  );
}
