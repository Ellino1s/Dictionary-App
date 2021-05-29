import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a href="https://github.com/Ellino1s/Dictionary-App">
            Open-sourse code
          </a>{" "}
          by Elina Sotska
        </small>
      </footer>
    </div>
  );
}
