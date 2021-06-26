import ProjectTitle from "./components/ProjectTitle";
import ScoreBoard from "./components/ScoreBoard";
import JiujitsuCards from "./components/JiujitsuCards";
import Loading from "./components/Loading";
import RestartMsg from "./components/RestartMsg";
import CongratulationMsg from "./components/CongratulationMsg";
import "./styles/style.css";
import React, { useState, useEffect } from "react";
import getSpotify from "./api/spotify";
import styled from "styled-components";
import { shuffle } from "./helper/shuffle";

import { v4 as uuidv4 } from "uuid";
const score = {
  currentScore: 3,
  bestScore: 5,
};

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

type AlbumProps = {
  src: string;
  onClickHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
};

type Card = {
  id: string;
  imgSrc: string;
  clicked: boolean;
};

const Album = ({ src, onClickHandler }: AlbumProps): JSX.Element => {
  return (
    <div>
      <StyledImg src={src} onClick={onClickHandler} />
    </div>
  );
};

const App = (): JSX.Element => {
  const [allCards, setAllCards] = useState<[] | Card[]>([]);
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<[] | Card[]>([]);

  // Data fetching, subscription, manually changing the DOM..
  useEffect(() => {
    const fetchData = async () => {
      const allCards: string[] = await getSpotify();
      const cards = allCards.map((imgSource): Card => {
        return {
          id: uuidv4(),
          imgSrc: imgSource,
          clicked: false,
        };
      });

      setAllCards(cards);
    };

    fetchData();
  }, []); // By passing array, we are making sure to run it only mounted

  useEffect(() => {
    const shuffledCards: Card[] = shuffle(allCards);

    switch (level) {
      case 1:
        setCards(shuffledCards.slice(0, 4));
        break;
      case 2:
        setCards(shuffledCards.slice(0, 8));
        break;
      case 3:
        setCards(shuffledCards.slice(0, 12));
        break;
      default:
        console.log("Game Ends!");
        break;
    }
  }, [level, allCards]);

  const onLevelChange = () => {
    setLevel(level + 1);
  };

  // Clicked Img has ID
  const onClickHandler = (e: React.MouseEvent, id: string) => {
    console.log("find id");
    // I can check IDs from array and find a matching one
  };

  return (
    <div>
      <Header />
      <Main></Main>
      <h1>{level}</h1>
      <button onClick={onLevelChange}>Change Level </button>
      {cards.map((card: Card) => (
        <Album
          key={card.id}
          src={card.imgSrc}
          onClickHandler={(e) => onClickHandler(e, card.id)}
        />
      ))}
    </div>
  );
};

type Score = {
  currentScore: string;
  bestScore: string;
};

const Header = (props: any): JSX.Element => {
  return (
    <header className="header">
      <ProjectTitle title="Jiujitsu Memory Game" />
      <ScoreBoard scores={score} />
    </header>
  );
};

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// function Main(props) {
//   return (
//     <main className="main">
//       {/* <JiujitsuCards level={cardsInfo.level} athletes={cardsInfo.athletes} /> */}
//     </main>
//   );

export default App;
