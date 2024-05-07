import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [exchangeRate, setExchangeRate] = useState("USD");
  const [selectedExchangeRate, setSelectedExchangeRATE] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  function CheckOut() {
    useEffect(() => {
      async function getEuro() {
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${exchangeRate}&to=${selectedExchangeRate}`
          );

          const data = await response.json();
          console.log(data);
          const conversionRate = data.rates[selectedExchangeRate];
          setSelectedExchangeRATE(conversionRate);
        } catch (err) {}
      }

      getEuro();
    }, [exchangeRate, selectedExchangeRate, amount]);
  }
  function selectedCCurr() {
    console.log("hi", exchangeRate);
    console.log("hi", selectedExchangeRate);
  }

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={exchangeRate}
        onChange={(e) => setExchangeRate(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={selectedExchangeRate}
        onChange={(e) => setSelectedExchangeRATE(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">IINR</option>
      </select>
      <p>${setSelectedExchangeRATE}</p>
    </div>
  );
}
