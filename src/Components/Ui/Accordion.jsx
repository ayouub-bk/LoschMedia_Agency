import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ Q, A, Index }) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const contentHeight = useRef(0);

  useEffect(() => {
    contentHeight.current = A.reduce((acc, answer) => {
      const answerEl = document.querySelector(
        `.answer-content[data-id="${answer.id}"]`
      ); // Use unique IDs if available
      if (answerEl) {
        acc += answerEl.offsetHeight;
      }
      return acc;
    }, 0);
  }, [A]);

  return (
    <div className="p-2 shadow-md  w-full   ">
      <button
        className="flex items-center gap-4     "
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
          open
            ? `h-${contentHeight.current}px opacity-100  `
            : `opacity-0 h-0  `
        }  `}
      >
        {A.map((answer, index) => {
          return (
            <div
              key={Index}
              className="overflow-hidden mt-2   "
              data-id={answer.index}
            >
              {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
