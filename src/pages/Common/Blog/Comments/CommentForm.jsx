import Button from "@/components/Buttons/Button";

const CommentForm = () => {
  return (
    <div>
      <h3 className="title text-3xl mb-7">Leave A Reply</h3>
      <form>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-7 mb-7">
          <div>
            <input
              className="w-full py-3 px-4 border border-transparent outline-none bg-input rounded focus-within:border-text-500"
              type="text"
              placeholder="Full name"
              name="name"
            />
          </div>
          <div>
            <input
              className="w-full py-3 px-4 border border-transparent outline-none bg-input rounded focus-within:border-text-500"
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div>
            <input
              className="w-full py-3 px-4 border border-transparent outline-none bg-input rounded focus-within:border-text-500"
              type="text"
              placeholder="Company name"
              name="company_name"
            />
          </div>
          <div>
            <input
              className="w-full py-3 px-4 border border-transparent outline-none bg-input rounded focus-within:border-text-500"
              type="url"
              placeholder="Website"
              name="website"
            />
          </div>
          <div className="lg:col-span-2">
            <textarea
              className="w-full py-3 px-4 border border-transparent outline-none bg-input rounded focus-within:border-text-500 resize-none"
              type="text"
              rows={3}
              placeholder="Enter your comment here"
              name="comment"
            />
          </div>
        </div>
        <Button
          className={"lg:ml-auto lg:mr-0 mx-auto"}
          type={"submit"}
          text={"Post a comment"}
          icon={<span className="material-icons-outlined">trending_flat</span>}
        />
      </form>
    </div>
  );
};

export default CommentForm;
