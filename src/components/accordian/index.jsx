import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    console.log(multiple);
    setMultiple(copyMultiple);
  }
  console.log(selected, multiple);

  return (
    <div className="flex justify-center h-[100vh] w-[100vw] items-center flex-col">
      <button
        onClick={() => setIsMultiSelection(!isMultiSelection)}
        className="mb-3 px-4 py-2 rounded-full text-white bg-slate-500 hover:bg-slate-700 focus:outline-none focus:ring focus:border-slate-300"
      >
        {isMultiSelection
          ? "Disabled Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="w-[500px]">
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-slate-500 mb-2 p-5 cursor-pointer">
              <div
                onClick={
                  isMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="
                font-bold
                p-1
                m-1
                text-white
                flex
                justify-between 
                "
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>

              {isMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="p-1 m-1">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="p-1 m-1">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>no data found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
