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
    <div className="p-2 shadow-md     ">
      <button
        className="flex items-center gap-4 w-full xs:w-auto  xs:justify-start  justify-center  pl-4 pt-4  "
        onClick={() => setOpen(!open)}
      >
        <span
          className={`mr-4 xs:text-[45px] text-[50px] transform rotate-90 transition duration-500  ease-out text-highlight ${
            open && `!rotate-180  `
          }  `}
        >
          {" "}
          {open ? "-" : "+"}{" "}
        </span>
        <span className="text-secondary xs:text-[22px]  text-[18px] w-[250px]  xs:w-full ">
          {Q}
        </span>
      </button>
      <div
        className={` xs:overflow-hidden transition-all duration-700 ease-in-out   flex flex-col   gap-4 ${
          open ? `h-${contentHeight.current}px opacity-100 ` : `opacity-0 h-0  `
        }  `}
      >
        <div
          key={Index}
          className="xs:overflow-hidden mt-2 pl-10 xs:p-6 "
          data-id={A.Index}
        >
          <div className="w-full pl-8 xs:p-0 ">
            {A.title &&
              A.title.map((T) => {
                return (
                  <p className="mb-4 xs:font-medium  xs:leading-6 "> {T}</p>
                );
              })}
          </div>
          {Index != 5 ? (
            <ol className="list-decimal">
              {A.content?.map((list) => {
                return (
                  <li className="flex  py-2  px-6  gap-6  ">
                    <p className="font-light text-[13px]  xs:text-[15px] xs:leading-6  ">
                      <span className="font-bold xs:tracking-wide  text-[14px] xs:text-[17px]	 ">
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
          {Index == 4 && (
            <div class="relative xs:overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Feature{" "}
                    </th>
                    <th scope="col" class="px-6 py-3">
                      LoshMedia
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Traditional Marketing Agencies{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Payment Model{" "}
                    </th>
                    <td class="px-6 py-4">
                      Performance-based: Pay only for results (pay per client).
                    </td>
                    <td class="px-6 py-4">Upfront retainer or monthly fees.</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Client Type{" "}
                    </th>
                    <td class="px-6 py-4">
                      Deliver loyal, paying clients ready to do business.
                    </td>
                    <td class="px-6 py-4">
                      Provide leads that might be interested or just potential
                      clients.
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Risk Assurance{" "}
                    </th>
                    <td class="px-6 py-4">
                      Risk-free guarantee: No payment unless results are
                      delivered.
                    </td>
                    <td class="px-6 py-4">
                      No guarantees; you pay regardless of outcome.
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Methodology
                    </th>
                    <td class="px-6 py-4">
                      Comprehensive approach using multiple strategies (content,
                      paid ads, funnels, etc.).
                    </td>
                    <td class="px-6 py-4">
                      Often rely on a single method (e.g., only paid ads or
                      content marketing).
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Customization
                    </th>
                    <td class="px-6 py-4">
                      Tailored strategies based on world-leading expert insights
                      and best practices.
                    </td>
                    <td class="px-6 py-4">
                      One-size-fits-all approach or standardized methods.
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Service Scope
                    </th>
                    <td class="px-6 py-4">
                      Full-service solution: Offers, funnels, referral systems,
                      etc.
                    </td>
                    <td class="px-6 py-4">
                      Limited to specific services without full integration.
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Expertise Integration
                    </th>
                    <td class="px-6 py-4">
                      Utilizes insights from top experts like Alex Hormozi,
                      Russell Brunson, Grant Cardone, and Jeremy Miner.
                    </td>
                    <td class="px-6 py-4">
                      May use generic strategies without deep expert
                      integration.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
