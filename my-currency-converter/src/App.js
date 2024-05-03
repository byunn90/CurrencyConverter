import { useEffect, useState } from "react";

export default function App() {
  function CheckOut() {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState(null);
    useEffect(function () {
      async function getEuro() {
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          setError(error.message);
          console.error("error with Api call", error);
        }
      }
      getEuro();
    }, []);
  }

  return (
    <div>
      <input type="text" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      <CheckOut />;
    </div>
  );
}
