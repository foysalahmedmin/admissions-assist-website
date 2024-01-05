/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Banner from "../Banner/Banner";
import Contents from "../Contents/Contents";

const Blog = () => {
  return (
    <main>
      <Banner />
      <div className="lg:py-24 py-14">
        <Contents />
        {/*<BlogNavigate />*/}
        {/*<Comments />*/}
      </div>
    </main>
  );
};

export default Blog;
