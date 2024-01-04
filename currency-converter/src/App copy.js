// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          if (!res.ok) throw new Error("something went wrong with fetching");
          const data = await res.json();

          if (data.rates[toCurrency === false])
            throw new Error("rates not found for conversion");
          setConverted(data.rates[toCurrency]);
          // console.log(data);
          // console.log(data.rates[toCurrency]);

          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        } finally {
          console.log("finally..........");
        }
      }
      if (fromCurrency === toCurrency) return setConverted(amount);

      convert();
    },

    [amount, fromCurrency, toCurrency]
  );
  return (
    <div>
      <input
        type="text"
        value={isLoading ? "loading..." : amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(Number(e.target.value))}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toCurrency}
      </p>
    </div>
  );
}
