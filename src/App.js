import "./App.css";
import Card from "./components/newly release/body";
import { data } from "./data/data";
import CardTitle from "./components/newly release/title";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardTitle />
        {data.map((item, index) => {
          return (
            <Card
              img={item.img}
              songName={item.songName}
              singerName={item.singerName}
              date={item.date}
              key={index}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
