import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
<<<<<<< HEAD

const SubFooter = () => {
=======
import { AddSubscriptions } from "@/pages/Footer/requests/footerApis.js";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const SubFooter = () => {
  const [email, setEmail] = useState("");
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: AddSubscriptions,
  });

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return toast.warn(`No ${!email && "email"}`);
      }
      const status = await mutateAsync({
        email,
      });
      toast.success(status?.message);
      setEmail("");
    } catch (error) {
      toast.error(error?.message);
    }
  };
>>>>>>> update-project/main
  return (
    <>
      <BackgroundLayer
        bg_position={"bg-right"}
        image_url={"/background/sub-footer.png"}
        className={"lg:py-24 py-14"}
      >
        <div className="">
          <div className="container mx-auto text-white">
            <div className="flex flex-col lg:flex-row lg:items-center gap-7">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl title text-white mb-4">
                  Stay Updated with EduBid
                </h1>
                <p>
                  Subscribe now for the latest in UK education, course trends,
                  and exclusive application tips
                </p>
              </div>
              <div className="">
                <div className="lg:w-[27rem] w-full lg:ml-auto">
                  <form className="w-full flex items-center gap-4 p-1 rounded-full border border-white focus-within:border-secondary-500 focus-within:text-secondary-500">
                    <input
<<<<<<< HEAD
                      className="flex-1 w-full px-4 bg-transparent outline-none placeholder:text-white focus:placeholder:text-secondary-500"
                      type="email"
=======
                      className="flex-1 w-full px-4 bg-transparent outline-none placeholder:text-white focus:placeholder:text-secondary-500 text-white"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
>>>>>>> update-project/main
                      placeholder="Your email address here"
                      required
                    />
                    <Button
                      type={"submit"}
<<<<<<< HEAD
=======
                      onClick={(e) => handleSave(e)}
                      isLoading={isLoading}
                      disabled={isLoading}
>>>>>>> update-project/main
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
      </BackgroundLayer>
    </>
  );
};

export default SubFooter;
