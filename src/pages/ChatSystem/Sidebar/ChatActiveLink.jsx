import { NavLink } from "react-router-dom";

const ChatActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-primary bg-primary bg-opacity-5 border-l-2 border-primary w-full transition-all px-4" : "transition-all"
      }
    >
      {children}
    </NavLink>
  );
};

export default ChatActiveLink;
