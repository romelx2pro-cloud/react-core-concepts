import logo from "./logo.svg";
import "./App.css";

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer",
  };
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil kondi",
  };
  var style = {
    color: "red",
    backgroundColor: "yellow",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a react person</p>
        <p>
          Edit done now <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react Paragraph</p>
        <h1 className="" style={style}>
          my heading: {person.name} {person.job}
        </h1>
        <h1 style={{ backgroundColor: "cyan", color: "yellow" }}>
          {" "}
          my heading2: {person2.name} {person2.job}
        </h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
