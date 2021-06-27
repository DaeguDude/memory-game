import React from "react";

type LoadingProps = {
  level: number;
};

function Loading(props: LoadingProps) {
  return (
    <div className="loading">
      <h1>Loading Lv{props.level}</h1>
    </div>
  );
}

export default Loading;
