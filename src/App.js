import "./App.css";
import motivation from "./getup.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Aziz JSX Checkpoint</h1>
        <br />
        <img src={motivation} alt="motivation" style={{ width: 250 }} />
        <br />
        <img src="/getup2.jpg" alt="img" style={{ width: 250 }} />
      </div>
      <video width={320} height={240} controls>
        <source src="/21savage.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default App;
