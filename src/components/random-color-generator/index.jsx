import { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColorGeneratorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandoxHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorGeneratorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") generateRandoxRgbColor();
    else generateRandoxHexColor();
  }, [typeOfColor]);

  function generateRandoxRgbColor() {
    const r = RandomColorGeneratorUtility(256);
    const g = RandomColorGeneratorUtility(256);
    const b = RandomColorGeneratorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        alignItems: "center",
      }}
    >
      <button
        className="px-5 py-4 m-5 rounded-full bg-slate-400 focus:outline-none focus:ring hover:bg-slate-300 focus:bg-slate-100"
        onClick={() => setTypeOfColor("hex")}
      >
        Create Hex Color
      </button>
      <button
        className="px-5 py-4 m-5 rounded-full bg-slate-400 focus:outline-none focus:ring hover:bg-slate-300 focus:bg-slate-100"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>
      <button
        className="px-5 py-4 m-5 rounded-full bg-slate-400 focus:outline-none focus:ring hover:bg-slate-300 focus:bg-slate-100"
        onClick={
          typeOfColor === "hex"
            ? () => generateRandoxHexColor()
            : () => generateRandoxRgbColor()
        }
      >
        Random Color Gen
      </button>
      <div className="flex justify-center items-center text-white mt-[50px] flex-col">
        <h1 className="text-lg">
          {typeOfColor === "rgb" ? "RGB Color " : "Hex Color "}
        </h1>
        <h3 className="text-xl">{color}</h3>
      </div>
    </div>
  );
}
