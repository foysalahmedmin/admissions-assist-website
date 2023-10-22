import Navigation from "@/pages/Header/Navigation/Navigation";

const Header = ({ navigationClassName }) => {
  return (
    <>
      <Navigation className={navigationClassName} />
    </>
  );
};

export default Header;
