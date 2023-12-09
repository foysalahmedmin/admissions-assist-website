import robotCheckIcon from "@/assets/images/icons/robot-check.svg";
import Button from "@/components/Buttons/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  AddNewContact,
  fetchContactCategories,
} from "@/pages/Common/Contact/requests/contactApis.js";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["contact_categories"],
    queryFn: () => fetchContactCategories(),
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: AddNewContact,
  });

  const handleSave = async () => {
    try {
      if (!name || !email || !phone || !category || !description) {
        return toast.warn(
          `No ${
            (!email && "email") ||
            (!name && "name") ||
            (!phone && "phone") ||
            (!category && "category") ||
            (!description && "description")
          }`
        );
      }
      const status = await mutateAsync({
        name,
        email,
        phone,
        category,
        description,
      });
      toast.success(status?.message);
      setName("");
      setEmail("");
      setPhone("");
      setCategory("");
      setDescription("");
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"We want to hear from you"}
          title={"Get in Touch with Us"}
          text={
            "Stay ahead of the curve by enrolling in trending disciplines recognized worldwide."
          }
        />
        <div className="max-w-5xl mx-auto px-7 lg:px-12">
          <form>
            <div className="grid lg:grid-cols-2 gap-7 mb-7">
              <div>
                <label htmlFor="name" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 bg-white"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 bg-white"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 bg-white"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                    Select Category
                  </span>
                </label>
                <select
                  name="inquiry"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 bg-white"
                  id="inquiry"
                  required
                >
                  <option value="">Select Inquiry</option>
                  {categories?.map((c) => (
                    <option key={c?._id} value={c?._id}>
                      {c?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="describe" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                    Describe here
                  </span>
                </label>
                <textarea
                  name="describe"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 bg-white"
                  id="describe"
                  placeholder="Write here"
                />
              </div>
            </div>
            <div className="mb-7 flex justify-center">
              <label htmlFor="robot_check" className="cursor-pointer">
                <div className="flex items-center justify-center rounded-xl bg-white px-7 py-4 gap-12 mx-auto">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      name="robot_check"
                      id="robot_check"
                    />
                    <span>I'm not robot</span>
                  </div>
                  <div>
                    <img src={robotCheckIcon} alt="" />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <Button
                className={"w-full"}
                onClick={handleSave}
                isLoading={isLoading}
                disabled={isLoading}
                type={"submit"}
                text={"Submit"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
