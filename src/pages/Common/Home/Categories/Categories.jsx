import SectionTitle from "@/components/SectionTitle/SectionTitle";
import cardIcon1 from "@/assets/images/icons/web.svg";
import cardIcon2 from "@/assets/images/icons/camera.svg";
import cardIcon3 from "@/assets/images/icons/design.svg";
import cardIcon4 from "@/assets/images/icons/language.svg";
import cardIcon5 from "@/assets/images/icons/progress.svg";
import cardIcon6 from "@/assets/images/icons/mic-speaker.svg";
import cardIcon7 from "@/assets/images/icons/sport.svg";
import cardIcon8 from "@/assets/images/icons/music.svg";
import CategoryCard from "@/components/Cards/CategoryCard/CategoryCard";
import Button from "@/components/Buttons/Button";

const card_data = [
  {
    icon_url: cardIcon1,
    title: "Development",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon2,
    title: "Photography",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon4,
    title: "Language",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon3,
    title: "Design",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon5,
    title: "Productivity",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon6,
    title: "Marketing",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon7,
    title: "Sport",
    text: `65 Courses`,
  },
  {
    icon_url: cardIcon8,
    title: "Music",
    text: `65 Courses`,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="lg:py-24 py-14">
      <div className="container mx-auto bg-[url('/background/world-map.svg')] bg-no-repeat bg-contain bg-top">
        <SectionTitle
          subtitle={"Categories"}
          title={"Courses Making Global Headlines"}
          text={`Stay ahead of the curve by enrolling in trending disciplines recognized worldwide.`}
        />
        <div>
          <div className="grid gap-7 grid-cols-2 lg:grid-cols-4 justify-around mb-12">
            {card_data.slice(0, 8).map((data, i) => (
              <CategoryCard key={i} data={data} />
            ))}
          </div>
          <div>
            <Button
              className={"mx-auto"}
              text={"View More"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
