import { useState } from "react";

function getBmiCategory(bmi) {
  if (!bmi || isNaN(bmi)) return "";

  if (bmi < 16) return "Severe Thinness";
  if (bmi < 17) return "Moderate Thinness";
  if (bmi < 18.5) return "Mild Thinness";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Obese Class I";
  if (bmi < 40) return "Obese Class II";

  return "Obese Class III";
}

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    let result = 0;

    if (unit === "metric") {
      //metric indonesia pakai ini
      const w = parseFloat(weight);
      const h = parseFloat(height) / 100; // cm → m

      if (!w || !h || h <= 0) return setBmi(null);

      result = w / (h * h);
    } else {
      // imperial
      const w = parseFloat(weight); // lbs
      const ft = parseFloat(heightFeet) || 0;
      const inch = parseFloat(heightInch) || 0;

      const totalInches = ft * 12 + inch;

      if (!w || !totalInches || totalInches <= 0) return setBmi(null);

      result = 703 * (w / (totalInches * totalInches));
    }

    setBmi(result);
  };

  const bmiCategory = bmi ? getBmiCategory(bmi) : "";
  const bmiText = bmi ? bmi.toFixed(1) : "-";
  return (
    <>
      <div className="mx-auto mt-20 my-auto">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 text-base text-white gap-2 ">
          <div className="bg-zinc-300 border rounded-xl border-zinc-500 p-10 text-black w-3/4 mx-auto gap-1 shadow-lg shadow-green-500/80 ">
            {/* <img src="/src/assets/bmi.png" className="w-1/3 mx-auto" alt="" /> */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center w-full">
              Calculate BMI
            </h1>
            <form onSubmit={handleCalculate}>
              <div className="mt-2">
                <label> Unit Type</label>
              </div>
              <div>
                <select
                  onChange={(e) => setUnit(e.target.value)}
                  value={unit}
                  name="unit"
                  id="unit"
                  className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Please select unit!</option>
                  <option value="metric">Metrics</option>
                  <option value="imperial">Imperial</option>
                </select>
              </div>
              <div className="mt-2">
                <label htmlFor="">Weight</label>
              </div>
              {unit == "metric" ? (
                <div className="relative">
                  <input
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                  />{" "}
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">
                    Kg
                  </span>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">
                    Lbs
                  </span>
                </div>
              )}

              <div className="mt-2">
                <label htmlFor="">Height</label>
              </div>
              {unit == "metric" ? (
                <div className="relative">
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">
                    Cm
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">
                      Ft
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={heightInch}
                      onChange={(e) => setHeightInch(e.target.value)}
                      className="w-full border border rounded border-zinc-500 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">
                      In
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="bg-green-600 w-full rounded-full p-2 font-bold text-white mt-3 hover:bg-green-500 cursor-pointer"
              >
                Calculate
              </button>
              <label className="text-sm text-gray-500">
                * ages: 2-100 years old
              </label>
            </form>
          </div>
          <div className="bg-zinc-300 border rounded-xl border-zinc-500 p-10 text-black w-3/4 mx-auto gap-1 shadow-lg shadow-green-500/80 ">
            <h1 className="text-2xl lg:text-4xl md:text-3xl">BMI Result</h1>
            {/* Result */}
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                Result
              </p>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-semibold">
                  {bmi ? bmi.toFixed(1) : "-"}
                </span>
                <span className="text-sm text-slate-500">BMI</span>
              </div>

              {bmi && (
                <>
                  <p className="text-base font-medium mb-1">
                    Category:{" "}
                    <span className="font-semibold text-slate-900">
                      {bmiCategory}
                    </span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    • &lt; 16: Severe Thinness <br />
                    • 16–17: Moderate Thinness <br />
                    • 17–18.5: Mild Thinness <br />
                    • 18.5–25: Normal <br />
                    • 25–30: Overweight <br />
                    • 30–35: Obese Class I <br />
                    • 35–40: Obese Class II <br />• &gt; 40: Obese Class III
                  </p>
                </>
              )}

              {!bmi && (
                <p className="text-sm text-slate-500">
                  Enter your weight and height above to calculate your BMI.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
