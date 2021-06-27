import { Scores } from "../types/spotifyType";

type ScoreBoardProps = {
  scores: Scores;
};

function ScoreBoard(props: ScoreBoardProps) {
  return (
    <div className="score-board">
      <div>Score: {props.scores.score}</div>
      <div>Best: {props.scores.bestScore}</div>
    </div>
  );
}

export default ScoreBoard;
