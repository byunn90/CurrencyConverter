import { useEffect, useState } from "react";

export default function App() {
  function CheckOut() {
    const [exchangeRate, setExchangeRate] = useState("USD");
    useEffect(
      function () {
        async function getEuro() {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=1&from=${exchangeRate}&to=${setExchangeRate}`
          );

          const data = await response.json();
          console.log(data);
        }
        console.log(setExchangeRate);
        getEuro();
      },
      [setExchangeRate]
    );
  }

  return (
    <div>
      <input type="text" />
      <select onClick={}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onClick={}>
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
