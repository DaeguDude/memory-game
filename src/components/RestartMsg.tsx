import React from "react";

type RestartMsgProps = {
  bestScore: number;
};

function RestartMsg(props: RestartMsgProps): JSX.Element {
  return (
    <div className="restart">
      <h2 className="restart__item">Game Over!</h2>
      <h2 className="restart__item">
        Congrats! Your best score is {props.bestScore}
      </h2>
      <h2 className="restart__item">Game restarts in 5 seconds</h2>
    </div>
  );
}

export default RestartMsg;
