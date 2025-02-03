import { CardX } from "./components/CardX";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-cardApp">
        <CardX name='Imantado' username='imantadotv' />
        <CardX name='Miguel Angel Duran' username='midudev' />
        <CardX name='AuronPlay' username='auronplay' />
      </div>
    </>
  );
}

export default App;
