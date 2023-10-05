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
        backgroundImage: `url(${image_url || "/background/common.png"})`,
      }}
      className={`${bg_position || "bg-center"} bg-no-repeat bg-cover bg-right`}
    >
      <div
        style={style}
        className={twMerge("bg-primary bg-opacity-70", className)}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundLayer;
