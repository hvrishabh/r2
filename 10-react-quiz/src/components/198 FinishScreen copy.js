function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🎖";
  if (percentage >= 0 && percentage < 60) emoji = "👍";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>
          <strong> {emoji} </strong>
        </span>
        You Scored <strong>{points} </strong>
        out of {maxPossiblePoints} <em>({Math.ceil(percentage)}%)</em>
      </p>
      <p className="highscore">(Highscore : {highscore} points )</p>
    </>
  );
}

export default FinishScreen;
