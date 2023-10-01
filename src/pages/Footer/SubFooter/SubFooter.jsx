import Button from "@/components/Buttons/Button";

const SubFooter = () => {
  return (
    <>
      <section className="bg-[url('/background/sub-footer.png')] bg-no-repeat bg-cover bg-right">
        <div className="lg:py-24 py-14 bg-primary bg-opacity-70">
          <div className="container text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl font-bold">
                  Stay Updated with EduBid
                </h1>
                <p>
                  Subscribe now for the latest in UK education, course trends,
                  and exclusive application tips
                </p>
              </div>
              <div className="flex-1 ">
                <div className="lg:max-w-[27rem] w-full lg:ml-auto">
                  <form className="w-full flex items-center gap-4 p-1 rounded-full border border-white">
                    <input
                      className="flex-1 w-full px-4 bg-transparent outline-none"
                      type="email"
                      placeholder="Your email address here"
                      required
                    />
                    <Button
                      type={"submit"}
                      icon={
                        <span className="material-icons-outlined">
                          trending_flat
                        </span>
                      }
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubFooter;
