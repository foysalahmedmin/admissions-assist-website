import img1 from "@/assets/images/university-slide-1.png";
import img2 from "@/assets/images/university-slide-2.png";
import img3 from "@/assets/images/university-slide-3.png";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import BlogCard from "../../../../components/Cards/BlogCard/BlogCard";

const card_data = [
  {
    image_url: img1,
    date: "02 September, 2023",
    category: "Development",
    tag: ["Development"],
    title: `Overseas Education Fair Amravation 2023`,
    text: "Fill in your personal information, academic background, desired courses, and preferences.",
  },
  {
    image_url: img2,
    date: "02 September, 2023",
    category: "Development",
    tag: ["Development"],
    title: `Overseas Education Fair Amravation 2023`,
    text: "Fill in your personal information, academic background, desired courses, and preferences.",
  },
  {
    image_url: img3,
    date: "02 September, 2023",
    category: "Development",
    tag: ["Development"],
    title: `Education Fair in New Castle Amravation 2023`,
    text: "Fill in your personal information, academic background, desired courses, and preferences.",
  },
];

const Blogs = () => {
  return (
    <section className="lg:py-24 py-14 bg-primary-500 bg-opacity-10" id="blogs">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"Our Blogs"}
          title={`Insights & Tips from the Experts`}
          text={`Dive deep into the world of UK education through our curated articles, guides, and student stories`}
        />
        <div>
          <div className="grid lg:grid-cols-3 gap-7">
            {card_data.slice(0, 3).map((data, i) => (
              <BlogCard key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
