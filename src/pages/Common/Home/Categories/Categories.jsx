/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CategoryCard from "@/components/Cards/CategoryCard/CategoryCard";
import Button from "@/components/Buttons/Button";
import {useQuery} from "react-query";
import {fetchWebSubjects} from "@/network/home.js";
import {useNavigate} from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchWebSubjects(),
  });
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
            {categories?.map((data, i) => (
              <CategoryCard key={i} data={data} />
            ))}
          </div>
          <div>
            <Button
              onClick={() => navigate("/search/universities")}
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
