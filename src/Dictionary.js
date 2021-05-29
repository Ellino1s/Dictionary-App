import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //Documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="backgroundTop">
        <header className="App-header">
          <h1>Dictionary</h1>

          <form
            className="form-inline d-flex justify-content-center md-form form-sm"
            onSubmit={search}
          >
            <input
              className="form-control form-control-sm w-50"
              id="search-form"
              type="search"
              autoComplete="off"
              onChange={handleKeywordChange}
            />
            <button type="submit" id="search_icon">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <hr />
          <div className="hint">
            suggested words: sunset, sky, underground, yoha...
          </div>
          <svg viewBox="0 0 1440 319">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </header>
      </div>
      <Results results={results} />
    </div>
  );
}
