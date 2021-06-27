import { Scores, Card } from "./types/spotifyType";

import ProjectTitle from "./components/ProjectTitle";
import ScoreBoard from "./components/ScoreBoard";
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

const Album = ({ src, onClickHandler }: AlbumProps): JSX.Element => {
  return (
    <div>
      <StyledImg src={src} onClick={onClickHandler} />
    </div>
  );
};

const App = (): JSX.Element => {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [allCards, setAllCards] = useState<[] | Card[]>([]);
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<[] | Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  useEffect(() => {
    // if all cards ard clicked, go to the next level
    if (cards.length !== 0) {
      const areAllCardsClicked = cards.every((card) => card.clicked);
      if (areAllCardsClicked) {
        setLevel((prevLevel: number) => prevLevel + 1);
      }
    }
  }, [cards]);

  const resetGame = () => {
    setLevel(1);
    setScore(0);
  };

  const onClickHandler = (e: React.MouseEvent, id: string) => {
    const clickedCard = cards.find((card: Card) => card.id === id);
    if (clickedCard?.clicked === true) {
      return resetGame();
    }

    const newCards = cards.map((card: Card) =>
      card.id === id ? { ...card, clicked: !card.clicked } : card
    );

    setCards(shuffle(newCards));
    setScore((prevScore) => prevScore + 1);
  };

  const Cards = cards.map((card: Card) => (
    <Album
      key={card.id}
      src={card.imgSrc}
      onClickHandler={(e) => onClickHandler(e, card.id)}
    />
  ));

  return (
    <div>
      <Header scores={{ score, bestScore }} />
      <Main></Main>
      <h1>{level}</h1>

      {/* {isLoading ? <Loading> : } */}

      {Cards}
    </div>
  );
};

type HeaderProps = {
  scores: Scores;
};

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <ProjectTitle title="Jiujitsu Memory Game" />
      <ScoreBoard scores={props.scores} />
    </header>
  );
};

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
