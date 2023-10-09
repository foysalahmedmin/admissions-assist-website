import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <hr className="my-7" />
      <div>
        <h1 className="title text-2xl mb-4">Contact information</h1>
        <ul className="flex flex-col gap-2 text-title">
          <li>
            <Link className="underline">
              Can I save my application and return to complete it later?
            </Link>
          </li>
          <li>
            <Link className="underline">How do I upload my documents?</Link>
          </li>
          <li>
            <Link className="underline">
              My documents are too large to upload. How do I reduce the file
              size?
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FAQ;
