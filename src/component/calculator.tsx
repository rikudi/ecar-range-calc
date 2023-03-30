import Header from "./header";
import Inputs from "./inputs";
import Results from "./results";
import Footer from "./footer";
import { useState } from "react";

export default function Calculator()
{
  const [results, setResults] = useState<number[]>([]);
  const [rangePerEuro, setRangePerEuro] = useState<number[]>([]);

  //component that calculates the results adding a multiplier of 1.05 per index
  //total of 5 index since there are 5 different tyre classes (A,B,C,D,E)
  //using useState hook to re-render every time values have changed
  const calcResults = (capacity: number, consumption: number, electricityPrice: number) => 
  {
    const newResults = [];
    const rangePerEuroArr = []
    for (let i = 0; i < 5; i++) {
      const multiplier = Math.pow(1.05, i);
      const result  = capacity / (consumption * multiplier) * 100;
      newResults.push(result);

      //calculate range per euro
      const consumptionPerKm = consumption / 100 * multiplier;
      const kwhPerEuro = 1 / electricityPrice;
      const rangePerEuro = kwhPerEuro / consumptionPerKm * 100;
      rangePerEuroArr.push(rangePerEuro);
    }
    setResults(newResults);
    setRangePerEuro(rangePerEuroArr);
  }
  return (
    <div className="min-h-screen w-7/12 flex flex-col items-center bg-white rounded my-7">
      <Header />
      <Inputs onCalculate={calcResults} />
      <Results results={results} rangePerEuro={rangePerEuro} />
      <Footer />
    </div>
  );
}