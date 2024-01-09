import { twMerge } from "tailwind-merge";

const BackgroundLayer = ({
  image_url,
  bg_position,
  style,
  className,
  children,
}) => {
  return (
    <section
      style={{
<<<<<<< HEAD
        backgroundImage: `url(${image_url || "/background/common.png"})`,
=======
        backgroundImage: `url(${image_url})`,
>>>>>>> update-project/main
      }}
      className={twMerge("bg-no-repeat bg-cover bg-right", bg_position)}
    >
      <div
        style={style}
<<<<<<< HEAD
        className={twMerge("bg-primary-500 bg-opacity-80", className)}
=======
        className={twMerge(
          "from-[#1baca1f9] via-[#1baca1f9] to-[#1baca16b] bg-gradient-to-r bg-opacity-80",
          className
        )}
>>>>>>> update-project/main
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundLayer;
