import LevelMsg from "./LevelMsg";

function JiujitsuCards(props) {
  const level = props.level;
  const athletes = props.athletes;

  return (
    <div class="jiujitsu-cards container">
      <LevelMsg level={level} />
      <Cards athletes={athletes} />
    </div>
  );
}

function Cards(props) {
  const athletes = props.athletes;

  return (
    <ul className="cards">
      {athletes.map((athlete) => (
        <Card key={athlete.key} img={athlete.img} name={athlete.name} />
      ))}
    </ul>
  );
}

// export default Cards;

function Card(props) {
  return (
    <li className="card">
      <img className="card__img" src={props.img} alt={"img" + props.name} />
      <div className="card__name">{props.name}</div>
    </li>
  );
}

export default JiujitsuCards;
