import Accordion from "@/components/Accordion/Accordion";

const ContactAndResidencyDetails = () => {
  return (
    <Accordion title={"Contact and Residency details"}>
      <div className="mb-7">
        <label htmlFor="address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Your Address
          </span>
          <p>
            Make sure your address is as it appears on any official documents,
            such as your passport, birth certificate or driving license.
          </p>
        </label>
        <input
          type="text"
          name="address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="address"
          placeholder="Address"
          required
        />
      </div>
      <div className="mb-7">
        <label htmlFor="email_address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Email Address
          </span>
          <p>
            Make sure your email address is as it appears on any official
            documents.
          </p>
        </label>
        <input
          type="email"
          name="email_address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="email_address"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="mb-7">
        <label htmlFor="email_address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Email Address
          </span>
          <p>
            Make sure your email address is as it appears on any official
            documents.
          </p>
        </label>
        <input
          type="email"
          name="email_address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="email_address"
          placeholder="Email Address"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Phone Number
          </span>
          <p>Enter as it appears on any official documents.</p>
        </label>
        <input
          type="tel"
          name="phone"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="phone"
          placeholder="Phone Number"
          required
        />
      </div>
    </Accordion>
  );
};

export default ContactAndResidencyDetails;
