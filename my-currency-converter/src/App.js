import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [selectedExchangeRate, setSelectedExchangeRATE] = useState("");

  function CheckOut() {
    useEffect(
      function () {
        try {
          async function getEuro() {
            const response = await fetch(
              `https://api.frankfurter.app/latest?amount=1&from=${exchangeRate}&to=${selectedExchangeRate}`
            );

            if (!response.ok)
              throw new Error(
                "something went wrong with fetching your currency"
              );

            const data = await response.json();
            console.log(data);
          }
          getEuro();
        } catch (err) {
          console.log(err.message);
        }
        // console.log(exchangeRate);
        // console.log(selectedExchangeRate);
      },
      [setExchangeRate]
    );
  }
  function selectedCCurr() {
    console.log("hi", exchangeRate);
    console.log("hi", selectedExchangeRate);
  }

  return (
    <div>
      <input type="text" placeholder="Type in Amount $" />
      <select onChange={(e) => console.log(setExchangeRate(e.target.value))}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">IINR</option>
      </select>
      <p>OUTPUT</p>
      <CheckOut />
      <button onClick={selectedCCurr}></button>
    </div>
  );
}
