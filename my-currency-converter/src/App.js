import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [exchangeRate, setExchangeRate] = useState("EUR");
  const [selectedExchangeRate, setSelectedExchangeRATE] = useState("USD");

  function CheckOut() {
    useEffect(
      function () {
        async function getEuro() {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=1&from=${exchangeRate}&to=${selectedExchangeRate}`
          );

          const data = await response.json();
          console.log(data);
        }
        getEuro();
        // console.log(exchangeRate);
        // console.log(selectedExchangeRate);
      },
      [setExchangeRate]
    );
  }
  function selectedCCurr() {}

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
    </div>
  );
}
