import ProjectTitle from "./components/ProjectTitle";
import ScoreBoard from "./components/ScoreBoard";
import JiujitsuCards from "./components/JiujitsuCards";
import Loading from "./components/Loading";
import RestartMsg from "./components/RestartMsg";
import CongratulationMsg from "./components/CongratulationMsg";
import "./styles/style.css";

import { v4 as uuidv4 } from "uuid";
const score = {
  currentScore: 3,
  bestScore: 5,
};

const cardsInfo = {
  level: 2,
  athletes: [
    {
      key: uuidv4(),
      img: "http://cdn.shopify.com/s/files/1/1800/2299/articles/gordon-ryan-bjj-fanatics_1024x1024.jpg?v=1606926518",
      name: "Gordon Ryan",
    },
    {
      key: uuidv4(),
      img: "https://cdn.shopify.com/s/files/1/0097/2161/0302/files/leandro-lo-bjj_large.JPG?v=1568465936",
      name: "Leandro Lo",
    },
    {
      key: uuidv4(),
      img: "https://lepribjj.com/wp-content/uploads/2017/05/Lucas.jpg",
      name: "Lucas Lepri",
    },
    {
      key: uuidv4(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KGeR5Yu8iHB2GpSI0GcKlKedPbt7K7z1PQ&usqp=CAU",
      name: "Marcelo Garcia",
    },
    {
      key: uuidv4(),
      img: "https://www.jiujitsutimes.com/wp-content/uploads/keenan-11.png",
      name: "Keenan Cornelius",
    },
  ],
};

function App() {
  return (
    <div>
      <Header />
      <Main />

      {/* <Loading level={cardsInfo.level} />
      <RestartMsg bestScore={score.bestScore} />
      <CongratulationMsg /> */}
    </div>
  );
}

function Header(props) {
  return (
    <header className="header">
      <ProjectTitle title="Jiujitsu Memory Game" />
      <ScoreBoard scores={score} />
    </header>
  );
}

function Main(props) {
  return (
    <main className="main">
      <JiujitsuCards level={cardsInfo.level} athletes={cardsInfo.athletes} />
    </main>
  );
}

export default App;
