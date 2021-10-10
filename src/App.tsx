import { Scores, Card } from "./types/spotifyType";

import ProjectTitle from "./components/ProjectTitle";
import ScoreBoard from "./components/ScoreBoard";
import Loading from "./components/Loading";
import RestartMsg from "./components/RestartMsg";
import CongratulationMsg from "./components/CongratulationMsg";
import "./styles/style.css";
import React, { useState, useEffect } from "react";
// import getSpotify from "./api/spotify";
import styled from "styled-components";
import { StyledImg } from "./components/StyledImg";
import { shuffle } from "./helper/shuffle";
import { imgSources } from "./imgSources";

import { v4 as uuidv4 } from "uuid";

type AlbumProps = {
  src: string;
  onClickHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
};

const Album = ({ src, onClickHandler }: AlbumProps): JSX.Element => {
  return <StyledImg src={src} onClick={onClickHandler} />;
};

const App = (): JSX.Element => {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [allCards, setAllCards] = useState<[] | Card[]>([]);
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<[] | Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [remainingSeconds, setRemainingSeconds] = useState(5);

  useEffect(() => {
    let allImgSources: any = [];
    const fetchData = async () => {
      // const allCards: string[] = await getSpotify();
      const cards = imgSources.map((imgSource): Card => {
        return {
          id: uuidv4(),
          imgSrc: imgSource,
          clicked: false,
        };
      });

      console.log(allImgSources);
      setAllCards(cards);
    };

    fetchData();
  }, []); // By passing array, we are making sure to run it only mounted

  useEffect(() => {
    const shuffledCards: Card[] = shuffle(allCards);

    switch (level) {
      case 1:
        setCards(shuffledCards.slice(0, 2));
        break;
      case 2:
        setIsLoading(true);
        setCards(shuffledCards.slice(0, 4));
        break;
      case 3:
        setIsLoading(true);
        setCards(shuffledCards.slice(0, 6));
        break;
      default:
        setIsDone(true);
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

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDone) {
      const timerId = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      setTimeout(() => {
        setIsDone(false);
        restartGame();
        clearInterval(timerId);
      }, 5000);
    }
  }, [isDone]);

  const resetGame = () => {
    setLevel(1);
    setScore(0);
    const shuffledCards = shuffle(allCards);
    setCards(shuffledCards.slice(0, 2));
  };

  const restartGame = () => {
    // Show Congratulation Message for 3 seconds
    setLevel(1);
    setScore(0);
    setBestScore(0);
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
    setScore((prevScore) => {
      return prevScore + 1;
    });
    if (score >= bestScore) {
      setBestScore((bestScore) => bestScore + 1);
    }
  };

  return (
    <div>
      <Header scores={{ score, bestScore }} />
      {/* <Main>{!isLoading && Cards}</Main> */}
      <Main>
        {!isLoading && !isDone && (
          <Cards cards={cards} onClickHandler={onClickHandler} />
        )}
      </Main>
      {isLoading ? <Loading level={level} /> : null}
      {isDone ? (
        <CongratulationMsg remainingSeconds={remainingSeconds} />
      ) : null}
    </div>
  );
};

type CardsProps = {
  cards: Card[];
  onClickHandler: (e: React.MouseEvent, id: string) => void;
};

const Cards = ({ cards, onClickHandler }: CardsProps) => {
  return (
    <div className="cards">
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

type HeaderProps = {
  scores: Scores;
};

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <ProjectTitle title="K-POP Memory Game" />
      <ScoreBoard scores={props.scores} />
    </header>
  );
};

const Main = styled.div`
  .cards {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    column-gap: 2rem;
    row-gap: 2rem;
  }
`;

export default App;
