import { NavLink } from "react-router-dom";

const ChatActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "lg:pl-[3.5vw] px-4 text-primary-500 bg-primary-500 bg-opacity-5 border-l-2 border-r-2 lg:border-l-4 lg:border-r-0 border-primary-500 lg:w-full transition-all"
          : "lg:pl-[3.5vw] border-l-2 border-r-2 lg:border-l-4 lg:border-r-0 border-transparent transition-all"
      }
    >
      {children}
    </NavLink>
  );
};

export default ChatActiveLink;
