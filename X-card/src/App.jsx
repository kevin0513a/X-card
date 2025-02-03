import { CardxFollow } from "./components/CardxFollow";
import "./App.css";
import { Newsx } from "./components/Newsx";

function App() {
  return (
    <>
      <div className="container-app">
        <div className="container-news">
          <Newsx type='Music - Trending' title='Kanye' post="443K posts"/>
          <Newsx type='Trending in Colombia' title='#GRAMMYs' post="4.8M posts"/>
          <Newsx type='Manchester United - Trending' title='Cristiano Ronaldo' post="50.4K posts"/>
          <Newsx type='Sports - Trending' title='Chelsea' post="152K posts"/>
        </div>
        <div className="container-cardApp">
          <CardxFollow
            isFollowing={true}
            name="imantado"
            username="imantadotv"
          />
          <CardxFollow
            isFollowing
            name="Miguel Angel Duran"
            username="midudev"
          />
          <CardxFollow
            isFollowing={false}
            name="auronPlay"
            username="auronplay"
          />
        </div>
      </div>
    </>
  );
}

export default App;
