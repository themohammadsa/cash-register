import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [gif, setGif] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );
  const [birthday, setBirthday] = useState("");
  const [lucky, setLucky] = useState("");
  const [result, setResult] = useState("");
  const [cookies, setCookies] = useState("block");

  function display() {
    setCookies("none");
  }

  function reset() {
    setBirthday("");
    setGif(
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );
    setLucky("");
    setResult("");
  }
  function check() {
    var DOB = birthday.split("-", 3);

    var date = parseInt(DOB[2]);
    var month = parseInt(DOB[1]);
    var year = parseInt(DOB[0]);

    total = date + month + year;
    luckyNum = parseInt(lucky);

    if (total % luckyNum == 0) {
      setGif("happy.png");
      setResult("Your birthday is LUCKY!");
    } else {
      setGif("sad.png");
      setResult("Your birthday is not lucky!");
    }
  }
  return (
    <div className="App">
      <div className="box">
        <header>
          <h1>Is your birthday lucky?</h1>
        </header>
        <section className="data">
          <h4> Enter your birthday: </h4>
          <input
            type="date"
            className="input-box"
            onChange={(event) => setBirthday(event.target.value)}
          />

          <h4> Enter your lucky number: </h4>
          <input
            className="input-box"
            onChange={(event) => setLucky(event.target.value)}
          />
        </section>

        <button onClick={check}> Check </button>
        <button className="reset" onClick={reset}>
          {" "}
          Reset{" "}
        </button>
        <h1 id="h1">
          <img class="gif" src={gif} />
          <br />
          {result}
        </h1>
        <footer>
          Created by{" "}
          <a id="text-style" href="https://mohammadsa.netlify.app/">
            Mohammad S{" "}
          </a>
          <br />
          <a href="https://www.linkedin.com/in/themohammadsa/">
            <img className="icon" src="linkedin.svg" />

            <a href="https://www.instagram.com/themohammadsa/">
              <img className="icon" src="instagram.svg" />
            </a>
          </a>
          <a href="https://github.com/themohammadsa">
            <img className="icon" src="github.svg" />
          </a>
          <a href=" https://twitter.com/themohammadsa">
            <img className="icon" src="twitter.svg" />
          </a>
        </footer>
      </div>
      <div
        className="cookies"
        style={{
          display: cookies
        }}
      >
        <p>This website does not store your cookies and/or information. </p>
        <button className="reset" onClick={display}>
          <strong> Accept</strong>{" "}
        </button>
      </div>
    </div>
  );
}
