import { CardxFollow } from "./components/CardxFollow";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-cardApp">
        <CardxFollow isFollowing={true} name='imantado' username='imantadotv' />
        <CardxFollow isFollowing name='Miguel Angel Duran' username='midudev' />
        <CardxFollow isFollowing={false} name='auronPlay' username='auronplay' />
      </div>
    </>
  );
}

export default App;
