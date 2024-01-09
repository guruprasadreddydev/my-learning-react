import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <div className="flex justify-center h-[100vh] w-[100vw] items-center flex-col">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="px-5 py-3  m-5 rounded-full text-white bg-slate-500 hover:bg-slate-700 focus:outline-none focus:ring focus:bg-slate-600"
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="w-[500px]">
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-slate-500 mb-2 p-5 cursor-pointer">
              <div
                onClick={
                  enableMultiSelection
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
                <h1>{dataItem.question}</h1>
                <span>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1
                      ? "–"
                      : "+"
                    : selected === dataItem.id
                    ? "–"
                    : "+"}
                </span>
              </div>
              {enableMultiSelection
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
