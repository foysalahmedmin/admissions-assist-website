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
        backgroundImage: `url(${image_url})`,
      }}
      className={twMerge("bg-no-repeat bg-cover bg-right", bg_position)}
    >
      <div
        style={style}
        className={twMerge(
          "from-[#1baca1f9] via-[#1baca1f9] to-[#1baca16b] bg-gradient-to-r bg-opacity-80",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundLayer;
