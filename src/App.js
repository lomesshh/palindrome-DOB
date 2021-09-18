import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [inputDate, setInputDate] = useState("");

  const clickhandler = () => {
    if (inputDate === "") {
      setMessage("Please enter date first");
    } else {
      var normalDigit = inputDate.replaceAll("-", "");
      // console.log(normalDigit);
      var splitNum = normalDigit.split("");
      var revString = splitNum.reverse();
      var finalCheck = revString.join("");
      // console.log(finalCheck);
      if (normalDigit === finalCheck) {
        setMessage("Congrats Your Birth date Is Palindrome !");
      } else {
        setMessage("We are Sorry ! Your Birth date Is Not Palindrome");
      }
    }
  };

  return (
    <div className="App grid py-16 px-20 space-y-16">
      <h1 className="text-3xl font-semibold text-red-200 font-serif animate-bounce">
        Check Is Your BirthDay Palindrome ?
      </h1>
      <label className="text-3xl font-semibold text-yellow-300 font-mono">
        Select your Date of Birth
      </label>
      <input
        type="date"
        className="border border-yellow-800 p-2 rounded-2xl bg-yellow-200 font-serif text-yellow-800 text-2xl"
        onChange={(e) => {
          setInputDate(e.target.value);
        }}
        required
      />

      <button
        onClick={clickhandler}
        className="border border-yellow-800 p-2 bg-yellow-700 hover:bg-red-800 animate-pulse rounded-full text-white text-lg"
      >
        Click here to check
      </button>
      <h1 className="text-3xl font-semibold text-red-200 font-serif">
        {message}
      </h1>
    </div>
  );
}
