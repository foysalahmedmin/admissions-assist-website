import React from "react";

const BlogNavigate = () => {
  return (
    <section className="my-7">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-7">
          <button className="flex items-center gap-4 text-left">
            <span className="material-icons-outlined">arrow_back_ios</span>
            <div>
              <p className="text-labels">PREV POST</p>
              <p>Standard text</p>
            </div>
          </button>
          <button className="flex flex-row-reverse items-center gap-4 text-right">
            <span className="material-icons-outlined">arrow_forward_ios</span>
            <div>
              <p className="text-labels">NEXT POST</p>
              <p>Standard post</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogNavigate;
