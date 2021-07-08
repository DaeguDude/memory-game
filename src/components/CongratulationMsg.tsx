import React, { useEffect, useState } from "react";

function CongratulationMsg(props: any): JSX.Element {
  return (
    <div className="congratulation">
      <h1>WOWZA!!!</h1>
      <h1>YOU HAVE A GREAT MEMORY!</h1>
      <h1>Restarting in {props.remainingSeconds} seconds...</h1>
    </div>
  );
}

export default CongratulationMsg;
