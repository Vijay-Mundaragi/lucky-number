import { useState } from "react";
import "./styles.css";

var messages = {
  lucky: "Your birthday is lucky 😊",
  unlucky: "Your birthday is NOT lucky 😥",
  invalidLuckyNumber: "Lucky Number must be greater than 0 😑",
  invalidBirthday: "Invalid Birthday 😐"
};

export default function App() {
  var [msg, setMsg] = useState("");

  function validateBirthday() {
    var dob = document.getElementById("birthday").value;
    if (dob === "") {
      setMsg(messages["invalidBirthday"]);
      return false;
    }
    return true;
  }

  function validateLuckyNumber() {
    var luckyNumber = document.getElementById("luckyNumber").value;
    if (Number.isNaN(luckyNumber) || luckyNumber <= 0) {
      setMsg(messages["invalidLuckyNumber"]);
      return false;
    }
    return true;
  }

  function checkLucky() {
    var dob = document.getElementById("birthday").value;
    var luckyNumber = document.getElementById("luckyNumber").value;

    if (validateBirthday() && validateLuckyNumber()) {
      dob = dob.split("-");
      var dobSum = 0;
      for (let i of dob) {
        for (let j of i) {
          dobSum += Number(j);
        }
      }
      console.log(dobSum);
      if (dobSum % luckyNumber === 0) {
        setMsg(messages["lucky"]);
      } else {
        setMsg(messages["unlucky"]);
      }
    }
  }

  return (
    <div className="App">
      <h1>Lucky Number</h1>

      <div id="container">
        <label htmlFor="birthday">
          {" "}
          <strong> Date of Birth : </strong> <input type="date" id="birthday" />
        </label>

        <label htmlFor="luckyNumber">
          <strong> Lucky Number : </strong>
          <input style={{ width: "150px" }} type="Number" id="luckyNumber" />
        </label>

        <button onClick={checkLucky}>Check Number</button>
      </div>

      <h2> {msg} </h2>
    </div>
  );
}
