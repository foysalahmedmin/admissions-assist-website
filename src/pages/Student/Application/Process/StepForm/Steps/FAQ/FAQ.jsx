/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

const FAQ = ({ data, title }) => {
  return (
    <>
      <hr className="my-7" />
      <div>
        <h1 className="title text-2xl mb-4">{title}</h1>
        <ul className="flex flex-col gap-2 text-text-900">
          {data?.map((f, i) => (
            <div key={i}>
              <li>
                <p className="underline">Q: {f?.Q}</p>
              </li>
              <li className="mt-2">
                <p className="">A: {f?.A}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FAQ;
