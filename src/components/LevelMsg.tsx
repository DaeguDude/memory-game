import React from "react";

type LevelMsgProps = {
  level: number;
};

function LevelMsg(props: LevelMsgProps) {
  return (
    <div className="level-msg">
      <h2>Lv{props.level} Choose your next athletes!</h2>
    </div>
  );
}

export default LevelMsg;
