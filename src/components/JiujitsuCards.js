import LevelMsg from "./LevelMsg";
import styled from "styled-components";

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

const Ul = styled.ul`
  list-style-type: none;
`
const CardsUl = styled(Ul)`
  display: flex;
`

const BlackCardsUl = styled(CardsUl)`
  background: #000;
`


function Cards(props) {
  const athletes = props.athletes;

  return (
    <>
      <BlackCardsUl>
        {athletes.map((athlete) => (
          <Card key={athlete.key} img={athlete.img} name={athlete.name} />
        ))}
      </BlackCardsUl>
    </>
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
