import Banner from "../Banner/Banner";
import BlogNavigate from "../BlogNavigate/BlogNavigate";
import Comments from "../Comments/Comments";
import Contents from "../Contents/Contents";

const Blog = () => {
  return (
    <main>
      <Banner />
      <div className="lg:py-24 py-14">
        <Contents />
        <BlogNavigate />
        <Comments />
      </div>
    </main>
  );
};

export default Blog;
