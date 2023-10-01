import img1 from "@/assets/images/icons/brand-01.svg"
import img2 from "@/assets/images/icons/brand-02.svg"
import img3 from "@/assets/images/icons/brand-03.svg"
import img4 from "@/assets/images/icons/brand-04.svg"
import img5 from "@/assets/images/icons/brand-05.svg"
import img6 from "@/assets/images/icons/brand-06.svg"

const Executives = () => {
  return (
    <section className="lg:py-24 py-14" id="executives">
      <div className="container">
        <div className="text-center mx-auto max-w-[40rem] mb-12">
          <h3 className=" title mb-4">
            Trusted by engineers and Beloved by Executives
          </h3>
          <hr />
        </div>
        <div>
            <div className="flex flex-wrap gpa-7 items-center justify-around">
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img1} alt="" />
                </div>
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img2} alt="" />
                </div>
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img3} alt="" />
                </div>
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img4} alt="" />
                </div>
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img5} alt="" />
                </div>
                <div className="h-28 flex-1">
                    <img className="h-full object-contain mx-auto" src={img6} alt="" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Executives;
