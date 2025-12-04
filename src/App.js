import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [defination, setDefination] = useState("");
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  let handleSearch = () => {
    let result = dictionary.find((item) => {
      if (item.word.toLowerCase() == text.toLowerCase()) {
        return item;
      }
    });
    if (result) {
      setDefination(result.meaning);
    } else {
      setDefination("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Search for a word..."
      />
      <button onClick={() => handleSearch()}>Search</button>
      <h3>Definition:</h3>
      {defination ? <p>{defination}</p> : ""}
    </div>
  );
}

export default App;
