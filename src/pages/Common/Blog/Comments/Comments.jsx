import Button from "@/components/Buttons/Button";
import profile from "@/assets/images/profile.jpg";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
const comments_data = [
  {
    name: "Musa Zain",
    image_url: profile,
    time: "02 September, 2023",
    comment:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    replies: [
      {
        name: "Musa Zain",
        image_url: profile,
        time: "02 September, 2023",
        comment:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        replies: null,
      },
      {
        name: "Musa Zain",
        image_url: profile,
        time: "02 September, 2023",
        comment:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        replies: null,
      },
    ],
  },
  {
    name: "Musa Zain",
    image_url: profile,
    time: "02 September, 2023",
    comment:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    replies: null,
  },
];

const Comments = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="border rounded-xl px-7 py-7 lg:py-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <h3 className="title text-3xl">3 Comments</h3>
            <Button
              text={"Leave a comment"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          </div>
          <div className="grid grid-cols-1">
            {comments_data.map((data, i) => (
              <SingleComment
                key={i}
                data={data}
                className={
                  comments_data.length - 1 == i ? "border-b-0" : "border-b"
                }
              />
            ))}
          </div>
        </div>
        <div className="border rounded-xl px-7 py-7 lg:py-12">
          <CommentForm />
        </div>
      </div>
    </section>
  );
};

export default Comments;
