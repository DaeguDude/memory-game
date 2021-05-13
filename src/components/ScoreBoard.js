function ScoreBoard(props) {
  return (
    <div class="score-board">
      <div>Score: {props.scores.currentScore}</div>
      <div>Best: {props.scores.bestScore}</div>
    </div>
  );
}

export default ScoreBoard;
