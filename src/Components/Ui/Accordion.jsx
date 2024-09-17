import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ Q, A, Index }) => {
  const [open, setOpen] = useState(false);

  const contentHeight = useRef(0);

  // useEffect(() => {
  //   contentHeight.current = A.reduce((acc, answer) => {
  //     const answerEl = document.querySelector(
  //       `.answer-content[data-id="${answer.id}"]`
  //     ); // Use unique IDs if available
  //     if (answerEl) {
  //       acc += answerEl.offsetHeight;
  //     }
  //     return acc;
  //   }, 0);
  // }, [A]);

  return (
    <div className="p-2 shadow-md  w-full   ">
      <button
        className="flex items-center gap-4   pl-4 pt-4  "
        onClick={() => setOpen(!open)}
      >
        <span
          className={`mr-4 text-[45px]  transform rotate-90 transition duration-500  ease-out text-highlight ${
            open && `!rotate-180  `
          }  `}
        >
          {" "}
          {open ? "-" : "+"}{" "}
        </span>
        <span className="text-secondary text-[22px]  ">{Q}</span>
      </button>
      <div
        className={` overflow-hidden transition-all duration-700 ease-in-out   flex flex-col gap-4 p-6 ${
          open ? `h-${contentHeight.current}px opacity-100 ` : `opacity-0 h-0  `
        }  `}
      >
        <div key={Index} className="overflow-hidden mt-2   " data-id={A.Index}>
          <div>
            {A.title &&
              A.title.map((T) => {
                return <p className="mb-4 font-medium  leading-6 "> {T}</p>;
              })}
          </div>
          {Index != 5 ? (
            <ol className="list-decimal">
              {A.content?.map((list) => {
                return (
                  <li className="flex  py-2  px-6  gap-6  ">
                    <p className="font-light text-[15px] leading-6  ">
                      <span className="font-bold tracking-wide text-[17px]	 ">
                        {list.name}{" "}
                      </span>
                      {list.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          ) : (
            <ul className="list-disc">
              {A.content?.map((list) => {
                return (
                  <li className="flex  py-2  px-6  gap-6  ">
                    <p className="font-light text-[15px] ">
                      <span className="font-bold tracking-wide text-[17px]	 ">
                        {list.name}{" "}
                      </span>
                      {list.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
          {A.conclusion && (
            <div>
              {A.conclusion.map((conclu) => {
                return <p className="mt-4">{conclu}</p>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
