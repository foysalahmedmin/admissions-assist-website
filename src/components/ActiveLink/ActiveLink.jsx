import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-primary" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
