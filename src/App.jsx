import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const hCm = parseFloat(height);

    if (!w || !hCm || w <= 0 || hCm <= 0) {
      setBmi(null);
      return;
    }

    const h = hCm / 100; // cm -> meter
    const result = w / (h * h);
    setBmi(result);
  };

  const bmiCategory = bmi ? getBmiCategory(bmi) : "";
  const bmiText = bmi ? bmi.toFixed(1) : "-";
  return (
    <>
      <div className="mx-auto mt-20">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 text-base text-white gap-3 ">
          <div className="bg-zinc-300 border rounded border-zinc-500 p-10 text-black w-3/4 mx-auto gap-2 ">
            <h1 className="text-3xl lg:text-5xl md:text-4xl"> Calculate BMI</h1>
            <div className="mt-2">
              <label> Unit Type</label>
            </div>
            <div>
              <select
                name="unit"
                id="unit"
                className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Please select unit!</option>
                <option value="Metrics">Metrics</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
            <div className="mt-2">
              <label htmlFor="">Weight</label>
            </div>
            <input
              type="text"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Type your weight.."
              className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
            />
            <div className="mt-2">
              <label htmlFor="">Height</label>
            </div>
            <input
              type="text"
              placeholder="Type your height.."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
            />
            <div className="mt-2">Sex</div>
            <select
              name="sex"
              id="sex"
              className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Please select sex!</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button className="bg-green-600 w-full rounded text-white mt-3 hover:bg-green-500 cursor-pointer">
              Calculate
            </button>
          </div>
          <div className="bg-zinc-300 border rounded border-zinc-500 p-10 text-black w-3/4 mx-auto gap-2 ">
            <h1 className="text-3xl lg:text-5xl md:text-4xl">BMI Categories</h1>
            <div>UnderWeight</div>
            <div>UnderWeight</div>
            <div>UnderWeight</div>
            <div>UnderWeight</div>
            <div>UnderWeight</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
